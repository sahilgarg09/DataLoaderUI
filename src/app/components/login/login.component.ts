import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	private formSubmitAttempt: boolean;

  constructor(
  	private fb: FormBuilder,
    private authService: AuthService
  ) { }

	 ngOnInit() {
	    this.form = this.fb.group({
	      email: ['', Validators.required],
	      password: ['', Validators.required]
	    });
	  }

  onSubmit() {
    //if (this.form.valid) {
      //this.email = this.form.value.email;
      //this.authService.login(this.form.value);
      console.log("submitting");
    //}
    this.formSubmitAttempt = true;
  }

}
