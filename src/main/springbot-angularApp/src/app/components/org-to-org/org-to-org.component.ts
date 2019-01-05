import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';
import { RestService } from '../../rest/rest.service';

declare var $:any;

@Component({
  selector: 'app-org-to-org',
  templateUrl: './org-to-org.component.html',
  styleUrls: ['./org-to-org.component.css']
})
export class OrgToOrgComponent implements OnInit {
  form: FormGroup;
  source: Object = {}
  constructor(private fb: FormBuilder, private authService: AuthService, private rest: RestService) { 
    
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      env: ['Environment', Validators.required]
    });
    this.getSourceDetails();
    
  }

  getSourceDetails(){
    let selected = sessionStorage.getItem("selected");
    let sourceObj = JSON.parse(sessionStorage.getItem(selected));
    this.source = {
      srcBaseUrl: sourceObj.baseURL,
      srcUsername: sourceObj.userName
    }
    console.log("this.this.source", this.source);
  }

  loginToOrg(){    
    let formData = this.form.value;
    if (formData.email !== '' && formData.password !== '' ) {
      this.rest.login(formData).subscribe((result) => {
      console.log("result", result);
      this.source['record'] = 20;
		  $('#confirmModal').modal('show');
	    }, (err) => {
	      console.log(err);
	    });
    }
  }

}
