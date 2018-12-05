import { Component, OnInit, NgModule } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {MatSelect, MatFormField, MatOption} from '@angular/material';
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
    {value: 'Account__ID__c', viewValue: 'Account__ID__c'}
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

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', Validators.required]
    });
  }

}
