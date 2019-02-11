import { Component, OnInit } from "@angular/core";
import { RestService } from "../../rest/rest.service";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatSnackBar
} from "@angular/material";
import { Inject } from '@angular/core';

import { ExportToOrgComponent } from "../export-to-org/export-to-org.component";

export interface Fields {
  value: string;
  viewValue: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-export",
  templateUrl: "./export.component.html",
  styleUrls: ["./export.component.css"]
})
export class ExportComponent implements OnInit {
  exportForm: FormGroup;
  objects = [{ value: "", viewValue: "Select an Object" }];
  fields: Fields[] = [];
  childRlnMapping = [];
  show_result = false;
  columns = [];
  resultsFields = [];
  setClickedRow: Function;
  selectedRow: Number;
  selectedRecord: {};
  queryIndex = "";
  queryString = "";
  exportObj = {};
  creatableFields = [];

  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    private dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.getAllObjects();
    this.setClickedRow = function(index) {
      this.selectedRow = index;
      this.selectedRecord = this.resultsFields[index];
      console.log("this.resultsFields[index]", this.resultsFields[index]);
    };
  }

  ngOnInit() {
    this.exportForm = this.fb.group({
      queries: this.fb.array([])
    });
    this.addquery();

  }

  get queryForms() {
    return this.exportForm.get("queries") as FormArray;
  }

  get filterByForm() {
    return this.queryForms.get("filterBy") as FormArray;
  }

  get exportFormValue() {
    return this.exportForm.value.queries;
  }

  addquery() {
    const query = this.fb.group({
      object: "",
      field: "",
      sortBy: "",
      sortDir: "",
      null: "",
      maxRecord: "",
      queryString: "",
      filterBy: "",
      operator: "",
      fieldValue: "",
      exportResult: {}
    });

    this.queryForms.push(query);
    this.addFilterBy();
    let obj = {
      fields: [],
      queryString: "",
      columns: [],
      exportResult: []
    }
    this.exportObj[this.queryForms.length - 1] = obj;
  }

  deletequery(i) {
    this.queryForms.removeAt(i);
    delete this.exportObj[i];
  }

  addFilterBy() {
    const filterBy = this.fb.group({
      fieldName: "",
      fieldValue: "",
      operator: ""
    });

    //this.queryForms.controls.filterBy.controls.push(filterBy);
    //this.filterByForm.push(filterBy);
  }

  //get the list of all objects to show in dropdown
  getAllObjects() {
    this.spinnerService.show();
    this.restService.getAllOrgObjects().subscribe(
      data => {
        data.sobjects.forEach(element => {
          let object = {
            value: element.name,
            viewValue: element.name
          };

          this.objects.push(object);
        });

        console.log("aman1", JSON.parse(JSON.stringify(this.objects)));
        //this.getFieldsObj();
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );
  }

  //get the list of all fields to show in dropdown
  getFieldsObj(objectName: string) {
    this.spinnerService.show();
    var that = this;

    this.restService.getFieldsOfObject(objectName).subscribe(
      data => {
        this.fields = [];
        this.creatableFields = [];
        let fields = [];
        data.fields.forEach(element => {
          if (element.createable) this.creatableFields.push(element.name);
          fields.push({ value: element.name, viewValue: element.label });
        });
        that.exportObj[this.queryIndex].fields = fields;

        let rln = {};
        data.childRelationships.forEach(element => {
          var obj = {};
          obj = {
            value: element.relationshipName,
            viewValue: element.childSObject
          }
          this.childRlnMapping.push(obj);
        });
        sessionStorage.setItem(
          "creatableFields",
          JSON.stringify(this.creatableFields)
        );
        sessionStorage.setItem(
          "childRlnMapping",
          JSON.stringify(this.childRlnMapping)
        );
        console.log("aman3", JSON.parse(JSON.stringify(data)));
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );
  }

  objectChangeHandler(event: any, index) {
    this.queryIndex = index.toString();
    let exportForm = this.exportForm.value.queries;
    let objectName = exportForm[index].object;
    //added by aman for fetching fields for particular objects
    if (objectName !== "Select an Object") {
      this.getFieldsObj(objectName);
    }
    let obj = {};
    obj[index] = objectName;
    sessionStorage.setItem("curObjSelected", JSON.stringify(obj));
    this.queryStringBuilder();
    //this.queryString = `SELECT * FROM ${exportForm[index].object}`;
  }

  querySOQL(index) {
    this.queryIndex = index;
    var retrievedData;
    //var queryString = this.query_string + ' limit 10';
    let queryString = this.queryString; //"SELECT Id, Name, LastModifiedDate FROM Account LIMIT 10";
    console.log("queryString", queryString);
    this.spinnerService.show();
    this.restService.soql_query(queryString).subscribe(
      data => {
        retrievedData = data.body;
        let sessionExportResults = JSON.parse(
          sessionStorage.getItem("exportResults")
        );
        if (!sessionExportResults) sessionExportResults = {};

        sessionExportResults[index] = data.body;
        sessionStorage.setItem(
          "exportResults",
          JSON.stringify(sessionExportResults)
        );

        this.updateResultsTable(JSON.parse(retrievedData));
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );
  }

  updateResultsTable(data) {
    this.show_result = true;
    let index = this.queryIndex;
    let exportForm = this.exportForm.value.queries;

    this.exportObj[this.queryIndex].columns = exportForm[index].field;
    this.exportObj[this.queryIndex].exportResult = data.records;

    this.columns = exportForm[index].field;
    this.resultsFields = data.records;
  }

  downloadButtonPush() {
    var csvData = this.convertToCSV(this.columns, this.resultsFields);
    var blob = new Blob([csvData], { type: "text/csv" });
    var url = window.URL.createObjectURL(blob);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, "example");
    } else {
      var a = document.createElement("a");
      a.href = url;
      a.download = "ETPHoldReview.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

  convertToCSV(columnRecord: any, resultData: any): any {
    var finalData = [];
    columnRecord.forEach(j => {
      finalData.push(j);
    });
    resultData.forEach(i => {
      columnRecord.forEach(j => {
        finalData.push(i[j]);
      });
    });
    //finalData.push(resultData);
    console.log("export1 " + resultData);
    console.log("export " + finalData);
    var array =
      typeof finalData != "object" ? JSON.parse(finalData) : finalData;

    var str = "";
    // var row = "";

    // for (var index in finalData) {
    //     //Now convert each value to string and comma-separated
    //     row += index + ',';
    // }
    // row = row.slice(0, -1);
    // //append Label row with line break
    // str += row + '\r\n';

    // for (var i = 0; i < array.length; i++) {
    //     var line = '';
    //     for (var index in array[i]) {
    //         if (line != '') line += ','

    //         line += array[i][index];
    //     }
    //     str += line + '\r\n';
    // }
    console.log("columnRecord" + columnRecord.length);
    for (var i = 0; i < array.length; i++) {
      if ((i + 1) % columnRecord.length == 0)
        str += '"' + array[i] + '"' + "\r\n";
      else str += '"' + array[i] + '"' + ",";
    }
    console.log(str);
    return str;
  }

  openDialog({ description }: any) {
    sessionStorage.setItem("curQueryIndex", this.queryIndex);
    this.dialog.open(ExportToOrgComponent, {
      data: { description }
    });
  }
  viewRelatedRecord(index) {
    /*this.queryIndex = index.toString();
    let exportForm = this.exportForm.value.queries;
    let nameOfObject = exportForm[index].object;

    let id = this.selectedRecord["Id"];
    let relationName = this.childRlnMapping[nameOfObject];
    var relNames = Object.values("");*/
    /*this.restService.getChildData(nameOfObject, id, "Contacts").subscribe(
      data => {
        console.log("childData record", JSON.parse(JSON.stringify(data)));
        this.dialog.open(ViewRelatedRecord, {
          data: {}
        });
      },
      error => console.log(error)
    );*/
    let id = this.selectedRecord["Id"];
    let exportForm = this.exportForm.value.queries;
    let nameOfObject = exportForm[index].object;
    if (nameOfObject) {
      this.dialog.open(ViewRelatedRecord, {
        data: {
          recId: id,
          objectName: nameOfObject
        }
      });
    }

  }

  queryStringBuilder() {
    let exportForm = this.exportFormValue[this.queryIndex];
    let object = exportForm.object;
    let field = exportForm.field;
    let sortBy = exportForm.sortBy;
    let maxRecord = exportForm.maxRecord;
    let sortDir = exportForm.sortDir;
    let nulls = exportForm.null;
    let filterBy = exportForm.filterBy;
    let operator = exportForm.operator;
    let fieldValue = exportForm.fieldValue;

    let queryString = "";
    if (object.length > 0) {
      queryString = `SELECT * FROM ${object}`;
    }
    if (field.length > 0) {
      queryString = `SELECT ${field.join(", ")} FROM ${object}`;
    }

    if (filterBy && operator && fieldValue) {
      queryString = `${queryString} WHERE ${filterBy} ${operator} '${fieldValue}'`;
    }

    if (sortBy.length > 0) {
      queryString = `${queryString} ORDER BY ${sortBy}`;
    }

    if (sortDir.length > 0) {
      queryString = `${queryString} ${sortDir}`;
    }

    if (nulls.length > 0) {
      queryString = `${queryString} ${nulls}`;
    }

    if (maxRecord.length > 0) {
      queryString = `${queryString} LIMIT ${maxRecord}`;
    }
    this.queryString = queryString;
    if(!this.exportObj[this.queryIndex])
      this.exportObj[this.queryIndex].queryString = "";
    this.exportObj[this.queryIndex].queryString = queryString;
  }
}

@Component({
  selector: "view-related-record",
  templateUrl: "viewRelatedRecord.html"
})
export class ViewRelatedRecord {
  childRecords = []
  recordForm: FormGroup;
  recordId = '';
  childRecResults = [];
  title = '';
  objectName = '';

  constructor(public dialogConfRef: MatDialogRef<ViewRelatedRecord>, fb: FormBuilder, private restService: RestService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.recordForm = fb.group({
      bottom: 0,
      fixed: false,
      top: 60,
      results: {}
    });
    this.recordId = data.recId;
    this.objectName = data.objectName;
    this.title = `${data.objectName} - Related Records`;
  }

  ngOnInit() {
    let childRecords = [];
    childRecords = JSON.parse(sessionStorage.getItem("childRlnMapping"));
    this.childRecords = childRecords;
    console.log("Loaded succesfully", this.childRecords);
  }


  onNoClick(): void {
    this.dialogConfRef.close();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  onChildRecSelect(child){
    var curIndex = sessionStorage.getItem("curQueryIndex");
    var curObjSelected = JSON.parse(sessionStorage.getItem("curObjSelected"));
    var nameOfObject = curObjSelected[curIndex];
    var results = this.recordForm.value.results;
    var that = this;

    if(child.value == null){
      this.openSnackBar("Please use a different record");
      return false;
    }
    console.log("getChildData", this.objectName, this.recordId, child);
    this.childRecResults = [];
    if(results[child.value]){
      this.childRecResults = results[child.value];
    } else {
      this.spinnerService.show();
      this.restService.getChildData(this.objectName, this.recordId, child.value).subscribe(
        data => {
          if(!results[child.value])
            results[child.value] = []
          console.log("data", data);
          if(data.done) {
            data.records.forEach(function(rec){
              var obj = {
                name: rec.Name || 'N/A',
                createdDate: new Date(rec.CreatedDate).toLocaleDateString("en-US"),
                LastModifiedDate: new Date(rec.LastModifiedDate).toLocaleDateString("en-US"),
              }
              results[child.value].push(obj);
              that.childRecResults.push(obj);
            });
          } else
            that.openSnackBar("Something went wrong")
          console.log("childData record", results);

        },
        error => console.log(error),
        () => this.spinnerService.hide()
      );
    }

  }


}
