import { Component, OnInit, NgModule } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {MatSelect, MatFormField, MatOption} from '@angular/material';
import Swal from 'sweetalert2';

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
export interface ResultsFields {
  value: string;
  viewValue: string;
}
/*@NgModule({
  imports: [MatFormField, MatSelect, MatOption],
  exports: [MatFormField, MatSelect, MatOption],
})*/

@Component({
  selector: 'app-soql-query',
  templateUrl: './soql-query.component.html',
  styleUrls: ['./soql-query.component.css']
})



export class SoqlQueryComponent implements OnInit {
  form: FormGroup;
  constructor(
  	private fb: FormBuilder
  ) { }

  soql_query : String = 'SELECT Id FROM Account';
  show_result: Boolean = false;
  show_DetailModal: Boolean = false;
  query_string: String = '';
  query_object: Object = {};

  objects: Objects[] = [
    {value: '', viewValue: 'Select an Object'},
    {value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation'},
    {value: 'Account', viewValue: 'Account'},
    {value: 'AccountBrand', viewValue: 'AccountBrand'},
    {value: 'AccountBrandShare', viewValue: 'AccountBrandShare'}
  ];

  nulls: Nulls[] = [
    {value: 'nulls-first', viewValue: 'Nulls First'},
    {value: 'nulls-last', viewValue: 'Nulls Last'}
  ];

  operators: Operators[] = [
    {value: '=', viewValue: '='},
    {value: '!=', viewValue: '!='}
  ];
  fields: Fields[] = [
    {value: 'count()', viewValue: 'count()'},
    {value: 'AccountNumber', viewValue: 'AccountNumber'},
    {value: 'AccountSource', viewValue: 'AccountSource'},
    {value: 'AccountType__c', viewValue: 'AccountType__c'},
    {value: 'Account__ID', viewValue: 'ID'},
    {value: 'Name', viewValue: 'Name'},
    {value: 'Home Phone', viewValue: 'HomePhone'},
    {value: 'Cellphone', viewValue: 'Cellphone'},
    {value: 'City', viewValue: 'City'},
    
  ];
  sortBy: SortBy[] = [
    {value: 'AccountNumber', viewValue: 'AccountNumber'},
    {value: 'AccountSource', viewValue: 'AccountSource'},
    {value: 'AccountType__c', viewValue: 'AccountType__c'},
    {value: 'Account__ID__c', viewValue: 'Account__ID__c'}
  ];
  filterBy: FilterBy[] = [
    {value: 'AccountNumber', viewValue: 'AccountNumber'},
    {value: 'AccountSource', viewValue: 'AccountSource'},
    {value: 'AccountType__c', viewValue: 'AccountType__c'},
    {value: 'Account__ID__c', viewValue: 'Account__ID__c'}
  ];

  resultsFields: Fields[] = [
    {value: 'Account__ID', viewValue: 'ID'},
    {value: 'Name', viewValue: 'Name'},    
    {value: 'Cellphone', viewValue: 'Cellphone'},
    {value: 'City', viewValue: 'City'},
    
  ];

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', Validators.required]
    });
  }

  querySOQL(){
    this.show_result =  true;
  }

  toggleModal(){
    //this.show_DetailModal =  !this.show_DetailModal;
    Swal({
      title: 'Detail Report',
      confirmButtonText: 'Close',
      confirmButtonClass: 'confirmButtonClass'
    })
  }
  objectChangeHandler(event: any){
    this.query_string = 'SELECT * FROM ' + event.target.value;
    this.query_object['object'] =  event.target.value;
  }
  fieldsChangeHandler(event: any){
    console.log("event.target.value", event.target, event);
    this.query_string = 'SELECT ' + event.target.value + ' FROM ' + this.query_object['object'];
    this.query_object['fields'] =  event.target.value;
  }

}
