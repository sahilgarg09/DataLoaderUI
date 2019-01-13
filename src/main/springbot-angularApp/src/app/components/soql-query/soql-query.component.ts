import { Component, OnInit, NgModule } from "@angular/core";
import {RestService} from "../../rest/rest.service";

import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
//import {MatSelect, MatFormField, MatOption} from '@angular/material';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import Swal from "sweetalert2";
import { restoreView } from "@angular/core/src/render3";
import { ExportToOrgComponent } from "../export-to-org/export-to-org.component";

export interface Objects {
  value: string;
  viewValue: string;
}
export interface Nulls {
  value: string;
  viewValue: string;
}
export interface Operators {
  value: string;
  viewValue: string;
}
export interface Fields {
  value: string;
  viewValue: string;
}
export interface SortBy {
  value: string;
  viewValue: string;
}
export interface FilterBy {
  value: string;
  viewValue: string;
}

/*@NgModule({
  imports: [MatFormField, MatSelect, MatOption],
  exports: [MatFormField, MatSelect, MatOption],
})*/

@Component({
  selector: "app-soql-query",
  templateUrl: "./soql-query.component.html",
  styleUrls: ["./soql-query.component.css"]
})
export class SoqlQueryComponent implements OnInit {
  queryForm: FormGroup;
  queryArr: FormArray;
  selectedRecord: {};

  constructor(private fb: FormBuilder, private restService: RestService, private dialog: MatDialog) {
    this.queryForm = new FormGroup({
      fields: new FormControl(null)
    })
   this.getAllObjects();
   this.setClickedRow = function(index){
    this.selectedRow = index;
    this.selectedRecord = this.resultsFields[index];
    console.log("this.resultsFields[index]", this.resultsFields[index]);
    }

  }
  
  listOfAllObjects=[];
  soql_query: String = "SELECT Id FROM Account";
  show_result: Boolean = false;
  result=[];
  columns=[];
  resultsFields=[];
  show_DetailModal: Boolean = false;
  query_string: String = "";
  query_object: Object = {};

  objects: String[] = [
    'Select an Object',
  ];

  nulls: Nulls[] = [
    { value: "nulls-first", viewValue: "Nulls First" },
    { value: "nulls-last", viewValue: "Nulls Last" }
  ];

  operators: Operators[] = [
    { value: "=", viewValue: "=" },
    { value: "!=", viewValue: "!=" }
  ];
  fields: Fields[] = [];
  sortBy: SortBy[] = [];
  filterBy: FilterBy[] = []; 
  selectedRow : Number;
  setClickedRow : Function;
  childRlnMapping: {};

  ngOnInit() {
    this.queryForm = this.fb.group({
      customerName: "",
      email: "",
      queryArr: this.fb.array([this.createQuery()])
    });
    var data = '{"totalSize":10,"done":true,"records":[{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSggAAG"},"Id":"00128000006XSggAAG","Type":"Customer - Channel","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSghAAG"},"Id":"00128000006XSghAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgiAAG"},"Id":"00128000006XSgiAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgjAAG"},"Id":"00128000006XSgjAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgkAAG"},"Id":"00128000006XSgkAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgnAAG"},"Id":"00128000006XSgnAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgoAAG"},"Id":"00128000006XSgoAAG","Type":"Customer - Channel","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgpAAG"},"Id":"00128000006XSgpAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000006XSgqAAG"},"Id":"00128000006XSgqAAG","Type":"Customer - Direct","CreatedDate":"2015-08-26T09:21:07.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"},{"attributes":{"type":"Account","url":"/services/data/v44.0/sobjects/Account/00128000008j0IxAAI"},"Id":"00128000008j0IxAAI","Type":null,"CreatedDate":"2015-10-16T09:17:40.000+0000","LastModifiedDate":"2017-09-23T09:15:57.000+0000"}]}';
    this.query_object["fields"]="Id, Type, CreatedDate, LastModifiedDate";
    this.updateResultsTable(JSON.parse(data));
  }

  querySOQL() {
    var retrievedData;
    var queryString = this.query_string + ' limit 10';
    console.log("queryString", queryString);
    this.restService.soql_query(queryString).subscribe(
      data => {
        retrievedData=data.body;
        console.log('aman', JSON.parse(JSON.stringify(retrievedData)) );
        this.updateResultsTable(JSON.parse(retrievedData));        
      },
      error => console.log(error));

  }
  updateResultsTable(data){
     

    this.show_result = true;
    var columns = this.query_object["fields"].split(", ");
    var records = data.records;    
    this.columns = columns;
    this.resultsFields=records;
    console.log("columns"+ this.columns);
    console.log("records"+ JSON.parse(JSON.stringify(data)));
    records.forEach(rec => {
     // console.log("rec"+ rec.Id);   
      // columns.forEach(col => {
      //   if(availableKeys.indexOf(col)> -1){
      //     console.log("col", col, rec[col]);
      //   }
      // });
    });
  }


  //get the list of all objects to show in dropdown

getAllObjects(){
  this.restService.getAllOrgObjects().subscribe(
    data => {
      data.sobjects.forEach(element => {
        this.objects.push(element.name)
      });
     
      console.log('aman1', JSON.parse(JSON.stringify(this.objects)) );
     //this.getFieldsObj();
          
    },
    error => console.log(error));

}

  getFieldsObj(objectName: string){
    this.restService.getFieldsOfObject(objectName).subscribe(
      data => {
        this.fields=[];
       data.fields.forEach(element => {
         this.fields.push({ value: element.name, viewValue: element.label })
       });
       let rln = {}
      data.childRelationships.forEach(element => {
        
        if(!rln[element.childSObject])
          rln[element.childSObject] = "";
          rln[element.childSObject] = element.relationshipName;   
      });
        this.childRlnMapping = rln;
        console.log("rln", rln);
         this.filterBy=this.fields;
         this.sortBy= this.fields;
        console.log('aman3', JSON.parse(JSON.stringify(data)));            
      },
      error => console.log(error));


  }


  toggleModal() {
    //this.show_DetailModal =  !this.show_DetailModal;
    Swal({
      title: (this.query_object["object"].length > 0) ? `${this.query_object["object"]} - Related Record` : 'Related Record',
      confirmButtonText: "Close",
      confirmButtonClass: "confirmButtonClass"
    });
  }
  objectChangeHandler(event: any) {
    console.log("event.target.value", event.target.value);
    //added by aman for fetching fields for particular objects
    if(event.target.value !== 'Select an Object')
     {
      this.getFieldsObj(event.target.value);
     }

    this.query_object["object"] = '';
    if(event.target.value !== 'Select an Object'){
      this.query_string = "SELECT * FROM " + event.target.value;
      this.query_object["object"] = event.target.value;
    }
    
  }
  fieldsChangeHandler(options) {
    var selectedOptionsArr = Array.apply(null,options).filter(option => option.selected).map(option => option.value);
    this.query_object["fields"] = selectedOptionsArr.join(", ")
    console.log("event.target.value", this.query_object["fields"]);
    this.query_string = "SELECT " + this.query_object["fields"] + " FROM " + this.query_object["object"];
    /*this.query_object["fields"] = event.target.value;*/
  }

  createQuery(): FormGroup {
    return this.fb.group({
      name: "",
      description: "",
      price: ""
    });
  }

  addAnotherQuery() {
    this.queryArr = this.queryForm.get("queryArr") as FormArray;
    this.queryArr.push(this.createQuery());
  }
  removeQuery(index){
    this.queryArr = this.queryForm.get("queryArr") as FormArray;
    if(this.queryArr.length > 1)
      this.queryArr.removeAt(index);
  }


  ////converting to csv 

  downloadButtonPush() {
    var csvData = this.convertToCSV(this.columns, this.resultsFields);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
  
    if(navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, "example");
    } else {
      var a = document.createElement("a");
      a.href = url;
      a.download = 'ETPHoldReview.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

  convertToCSV(columnRecord: any, resultData: any): any {
    var finalData=[]
    columnRecord.forEach(j => {
      finalData.push(j);
    });
    resultData.forEach(i => {
      columnRecord.forEach(j => {
        finalData.push(i[j]);
      });
      
    });
    //finalData.push(resultData);
    console.log("export1 "+ resultData);
    console.log("export "+ finalData);
     var array = typeof finalData != 'object' ? JSON.parse(finalData) : finalData;
    
     var str = '';
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
    console.log("columnRecord"  +columnRecord.length)
    for (var i=0; i<array.length; i++){
      if((i+1)%(columnRecord.length)==0)
        str+='"'+array[i]+'"'+'\r\n';
      else 
      str+='"'+array[i]+'"'+',';
    }
    console.log(str);
    return str;
}

viewRelatedRecord(){
  //(nameOfObject: any, id: any, relationName: any  
  let nameOfObject = this.query_object["object"];
  let id = this.selectedRecord['Id'];
  let relationName = this.childRlnMapping[nameOfObject];
  this.restService.getChildData(nameOfObject, id, relationName).subscribe(
    data => {       
      console.log('childData record', JSON.parse(JSON.stringify(data)));   
      this.dialog.open(ViewRelatedRecord, {
        data: {}
      });   
    },
    error => console.log(error));
}

openDialog({description}: any) {
  this.dialog.open(ExportToOrgComponent, {
    data: {description}
  });
}



}

@Component({
  selector: 'view-related-record',
  templateUrl: 'viewRelatedRecord.html',
})
export class ViewRelatedRecord {

  constructor(public dialogConfRef: MatDialogRef<ViewRelatedRecord>) {}

  onNoClick(): void {
    this.dialogConfRef.close();
  }

}

