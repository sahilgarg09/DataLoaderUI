import { Component, OnInit } from '@angular/core';
export interface Objects {
  value: string;
  viewValue: string;
}
export interface Fields {
  value: string;
  viewValue: string;
  fieldValue: string;
}

@Component({
  selector: 'app-upsert-component',
  templateUrl: './upsert-component.component.html',
  styleUrls: ['./upsert-component.component.css']
})
export class UpsertComponentComponent implements OnInit {
  objects: Objects[] = [
    {value: '', viewValue: 'Select an Object'},
    {value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation'},
    {value: 'Account', viewValue: 'Account'},
    {value: 'AccountBrand', viewValue: 'AccountBrand'},
    {value: 'AccountBrandShare', viewValue: 'AccountBrandShare'}
  ];
  fields: Fields[] = [
    {value: 'count()', viewValue: 'count()', fieldValue: ''},
    {value: 'AccountNumber', viewValue: 'AccountNumber', fieldValue: ''},
    {value: 'AccountSource', viewValue: 'AccountSource', fieldValue: ''},
    {value: 'AccountType__c', viewValue: 'AccountType__c', fieldValue: ''},
    {value: 'Account__ID', viewValue: 'ID', fieldValue: ''},
    {value: 'Name', viewValue: 'Name', fieldValue: ''},
    {value: 'Home Phone', viewValue: 'HomePhone', fieldValue: ''},
    {value: 'Cellphone', viewValue: 'Cellphone', fieldValue: ''},
    {value: 'City', viewValue: 'City', fieldValue: ''},
    
  ];

  section: string = 'STEP_1';
  constructor() { }

  ngOnInit() {
  }

  handleNext(){
    this.section = 'STEP_2';       
  }
  handlConfirm(){
    this.section = 'STEP_3';
  }

}
