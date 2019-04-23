import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDialog, MatDialogConfig, MatSnackBar } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "./../../auth/auth.service";
import { RestService } from "../../rest/rest.service";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { ExportRelatedRecord } from "../export/export.component";

@Component({
  selector: "app-export-to-org",
  templateUrl: "./export-to-org.component.html",
  styleUrls: ["./export-to-org.component.css"]
})
export class ExportToOrgComponent implements OnInit {
  form: FormGroup;
  env: string;
  source: Object = {
    exportResults: [],
    curObjName: ""
  };
  dest: Object = {
    env: "",
    email: "",
    password: ""
  };
  sStepper: String = "LOGIN"; //Options: LOGIN, CHANGE_TARGET_ORG, ENV2_DATA_AVAILABLE, 
  isEnv2DataAvailable: Boolean =  false;
  isFormDisbaled: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private rest: RestService,
    private confDialog: MatDialog,
    private dialogRef: MatDialogRef<ExportToOrgComponent>,
    @Inject(MAT_DIALOG_DATA) { env, email, password }: any
  ) {
    this.env = env;

    this.form = fb.group({
      env: [env, Validators.required],
      email: [email, Validators.required],
      password: [password, Validators.required]
    });
  }

  ngOnInit() {
    this.getSourceDetails();
  }

  getSourceDetails() {
    let selected = sessionStorage.getItem("selected");
    let sourceObj = JSON.parse(sessionStorage.getItem(selected));
    let queryIndex = sessionStorage.getItem("curQueryIndex");
    let exportResults = JSON.parse(sessionStorage.getItem("exportResults"));
    let curObjSelected = JSON.parse(sessionStorage.getItem("curObjSelected"));
    let env2 = sessionStorage.getItem("env2");
    if (env2 != null) {
      this.sStepper = "CHANGE_TARGET_ORG";
      let formData = this.form.value;
      let oEnv2 = JSON.parse(env2);
      this.dest = {
        email: oEnv2.userEmail, 
        password: "salt&pepper",
        env: 'production'
      }
      this.isFormDisbaled = true;
    }
    this.isEnv2DataAvailable = (env2 != null) ? true : false;

    this.source = {
      srcBaseUrl: sourceObj.baseURL,
      srcUsername: sourceObj.userName,
      exportResults: JSON.parse(exportResults[queryIndex]).records,
      curObjName: curObjSelected[queryIndex]
    };  
    console.log("this.source init", this.source);  
  }

  changeTargetOrg() {
    this.sStepper = 'LOGIN';
    this.isFormDisbaled = false;
    this.dest = {
      email: "", 
      password: "",
      env: ''
    }
  }

  proceedToExport() {
    this.sStepper = 'ENV2_DATA_AVAILABLE';
  }

  loginToOrg() {
    console.log("reaches here?");
    let formData = this.form.value;
    this.dialogRef.close();
    if (formData.email !== "" && formData.password !== "") {
      this.rest.login(formData).subscribe(
        result => {
          console.log("result", result);
          var pathArray = result.metadataServerUrl.split("/");
          var protocol = pathArray[0];
          var host = pathArray[2];

          result.baseURL = protocol + "//" + host;
          result.env = formData.env;
          sessionStorage.setItem("env2", JSON.stringify(result));
          let source = this.source;
          this.confDialog.open(ConfirmationDialog, {
            data: { source }
          });
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
  exportParentRec() {
    let source = this.source;
    this.dialogRef.close();
    this.confDialog.open(ConfirmationDialog, {
      data: { source }
    });
  }

  exportRelRec() {
    let curObjName = this.source['curObjName'];
    let exportResults = this.source['exportResults'];
    
    console.log("this.source on clicl", curObjName, typeof exportResults, exportResults, this.source);
    this.dialogRef.close();
    this.confDialog.open(ExportRelatedRecord, {
      data: {
        recId: "id",
        objectName: curObjName,
        queryResult: exportResults
      }
    });
  }
}

@Component({
  selector: "confirmation-dialog",
  templateUrl: "confirmation-dialog.html",
  styleUrls: ["./export-to-org.component.css"]
})
export class ConfirmationDialog {
  totalRecord = "";
  records = [];
  objectName = "";
  targetOrgName = "";
  constructor(
    public dialogConfRef: MatDialogRef<ConfirmationDialog>,
    private restService: RestService,
    private spinnerService: Ng4LoadingSpinnerService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let exportResults = data.source.exportResults;
    this.totalRecord = exportResults.length;
    this.records = exportResults;
    this.objectName = data.source.curObjName;
    let env2 = JSON.parse(sessionStorage.getItem("env2"));
    this.targetOrgName = env2.organizationName;
  }

  onNoClick(): void {
    this.dialogConfRef.close();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }

  formatData() {
    let recordArr = [];
    let creatableFields = JSON.parse(sessionStorage.getItem("creatableFields"));
    this.records.forEach(rec => {
      let recordObj = rec;
      let objKeys = Object.keys(recordObj);
      let uniquekeyArr = this.compareArr(creatableFields, objKeys);
      console.log("objKeys", objKeys, creatableFields, uniquekeyArr);
      let refId = recordObj.Id.substring(3);
      recordObj.attributes["referenceId"] = refId;
      objKeys.forEach(function(ele) {
        if (creatableFields.indexOf(ele) == -1 && ele != "attributes")
          delete recordObj[ele];
      });
      delete recordObj.attributes.url;
      recordArr.push(recordObj);
    });
    return recordArr;
  }

  onYesClick(): void {
    let objectName = this.objectName;
    let recordData = this.formatData();
    this.spinnerService.show();
    console.log("request object", objectName, recordData);
    var reqData = { records: recordData };
    var reqDataString = JSON.stringify(reqData)
      .split("null")
      .join('""');
    var that = this;
    this.restService.orgtoOrgTransfer(objectName, reqDataString).subscribe(
      data => {
        console.log("records confirmation data", data.results);
        sessionStorage.setItem(
          "refIdMapping",
          JSON.stringify(data.results)
        );
        that.openSnackBar("Records exported to destination org.");
      },
      error => {
        console.log(error);
        that.openSnackBar("Something went wrong! Please try again.");
      },
      () => {
        this.spinnerService.hide();
        this.onNoClick();
      }
    );
  }

  compareArr(arr1, arr2) {
    const finalArr = [];
    arr1.forEach(e1 =>
      arr2.forEach(e2 => {
        if (e1 === e2) {
          finalArr.push(e1);
        }
      })
    );
    return finalArr;
  }
}
