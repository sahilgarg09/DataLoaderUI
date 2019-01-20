import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';
import { RestService } from '../../rest/rest.service';


@Component({
  selector: 'app-delete-query',
  templateUrl: './delete-query.component.html',
  styleUrls: ['./delete-query.component.css']
})
export class DeleteQueryComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private rest: RestService) { }

  ngOnInit() {
    this.form = this.fb.group({
      object: "",
      where: "",
      orderBy: "",
      bulkApi: false,
      hardDelete: false,
      serialCode: false
    });
  }

  onSubmit(){
    console.log("this.form", this.form.value);
  }

}
