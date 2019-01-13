import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "./../../auth/auth.service";
import { RestService } from "../../rest/rest.service";

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
    this.source = {
      srcBaseUrl: sourceObj.baseURL,
      srcUsername: sourceObj.userName
    };
    console.log("this.this.source", this.source);
  }

  loginToOrg() {
    let formData = this.form.value;
    this.dialogRef.close();
    this.confDialog.open(ConfirmationDialog, {
      data: {}
    });
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
  constructor(
    public dialogConfRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogConfRef.close();
  }
}
