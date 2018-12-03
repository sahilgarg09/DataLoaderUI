import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';

//import { RestService } from '../../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	private formSubmitAttempt: boolean;

  constructor(
  	//private rest: RestService,
  	private fb: FormBuilder,
    private authService: AuthService
  ) { }

	 ngOnInit() {
	    this.form = this.fb.group({
	      email: ['', Validators.required],
        password: ['', Validators.required],
        env: ['Enviournment', Validators.required],
        api: ['Api Version', Validators.required]
	    });
	  }

  onSubmit() {
    //if (this.form.valid) {
      //this.email = this.form.value.email;
      /*this.rest.login(this.form.value.email,this.form.value.password, this.form.value.env, this.form.value.api).subscribe((result) => {
	      //this.router.navigate(['/product-details/'+result._id]);
	      console.log(result);
	    }, (err) => {
	      console.log(err);
	    });*/
      console.log(this.form.value);
      this.authService.login(this.form.value);
      console.log("submitting check if this is the one");
    //}
    this.formSubmitAttempt = true;
  }

}
