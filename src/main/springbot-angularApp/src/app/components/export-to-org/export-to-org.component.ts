import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "./../../auth/auth.service";
import { RestService } from "../../rest/rest.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: "app-export-to-org",
  templateUrl: "./export-to-org.component.html",
  styleUrls: ["./export-to-org.component.css"]
})
export class ExportToOrgComponent implements OnInit {
  form: FormGroup;
  env: string;
  source: Object = {};

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
    this.source = {
      srcBaseUrl: sourceObj.baseURL,
      srcUsername: sourceObj.userName,
      exportResults: exportResults[queryIndex],
      curObjName: curObjSelected[queryIndex]
    };
    console.log("this.this.source", this.source);
  }

  loginToOrg() {
    let formData = this.form.value;
    this.dialogRef.close();
    if (formData.email !== '' && formData.password !== '' ) {
      this.rest.login(formData).subscribe((result) => {
        console.log("result", result);
        sessionStorage.setItem('env2',JSON.stringify(result));
        let source = this.source;
        this.confDialog.open(ConfirmationDialog, {
          data: {source}
        });
        }, (err) => {
          console.log(err);
        });
      }
    
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}

@Component({
  selector: "confirmation-dialog",
  templateUrl: "confirmation-dialog.html"
})
export class ConfirmationDialog {
  totalRecord = "";
  records = [];
  objectName = "";
  constructor(
    public dialogConfRef: MatDialogRef<ConfirmationDialog>, private restService: RestService, private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
    let exportResults = JSON.parse(data.source.exportResults);
    this.totalRecord = exportResults.totalSize;
    this.records = exportResults.records;
    this.objectName = data.source.curObjName;
  }

  onNoClick(): void {
    this.dialogConfRef.close();
  }

  formatData(){   
    let recordArr = [];    
    this.records.forEach(rec => {
      let recordObj = rec;
      let urlArr = rec.attributes.url.split("/");
      recordObj.attributes['referenceId'] = urlArr[urlArr.length -1];
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
    this.restService.orgtoOrgTransfer(objectName, recordData).subscribe(
      data => {
        console.log("records confirmation data", data.body);
      },
      error => console.log(error),
      () => this.spinnerService.hide()
    );

  }
}
