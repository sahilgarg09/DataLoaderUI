import { Component, OnInit, NgModule } from "@angular/core";
import {RestService} from "../../rest/rest.service";

import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
//import {MatSelect, MatFormField, MatOption} from '@angular/material';
import Swal from "sweetalert2";
import { restoreView } from "@angular/core/src/render3";

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
  selector: "app-soql-query",
  templateUrl: "./soql-query.component.html",
  styleUrls: ["./soql-query.component.css"]
})
export class SoqlQueryComponent implements OnInit {
  queryForm: FormGroup;
  queryArr: FormArray;

  constructor(private fb: FormBuilder, private restService: RestService) {
    this.queryForm = new FormGroup({
      fields: new FormControl(null)
    })
  }

  soql_query: String = "SELECT Id FROM Account";
  show_result: Boolean = false;
  result=[];
  resultsFields=[];
  show_DetailModal: Boolean = false;
  query_string: String = "";
  query_object: Object = {};

  objects: Objects[] = [
    { value: "", viewValue: "Select an Object" },
    { value: "AcceptedEventRelation", viewValue: "AcceptedEventRelation" },
    { value: "Account", viewValue: "Account" },
    { value: "AccountBrand", viewValue: "AccountBrand" },
    { value: "AccountBrandShare", viewValue: "AccountBrandShare" }
  ];

  nulls: Nulls[] = [
    { value: "nulls-first", viewValue: "Nulls First" },
    { value: "nulls-last", viewValue: "Nulls Last" }
  ];

  operators: Operators[] = [
    { value: "=", viewValue: "=" },
    { value: "!=", viewValue: "!=" }
  ];
  fields: Fields[] = [
    { value: "count()", viewValue: "count()" },
    { value: "AccountNumber", viewValue: "AccountNumber" },
    { value: "AccountSource", viewValue: "AccountSource" },
    { value: "AccountType__c", viewValue: "AccountType__c" },
    { value: "Account__ID", viewValue: "Id" },
    { value: "Name", viewValue: "Name" },
    { value: "Home Phone", viewValue: "HomePhone" },
    { value: "Cellphone", viewValue: "Cellphone" },
    { value: "City", viewValue: "City" }
  ];
  sortBy: SortBy[] = [
    { value: "AccountNumber", viewValue: "AccountNumber" },
    { value: "AccountSource", viewValue: "AccountSource" },
    { value: "AccountType__c", viewValue: "AccountType__c" },
    { value: "Account__ID__c", viewValue: "Account__ID__c" }
  ];
  filterBy: FilterBy[] = [
    { value: "AccountNumber", viewValue: "AccountNumber" },
    { value: "AccountSource", viewValue: "AccountSource" },
    { value: "AccountType__c", viewValue: "AccountType__c" },
    { value: "Account__ID__c", viewValue: "Account__ID__c" }
  ]; 

  ngOnInit() {
    this.queryForm = this.fb.group({
      customerName: "",
      email: "",
      queryArr: this.fb.array([this.createQuery()])
    });
  }

  querySOQL() {
    var retrievedData;
    var queryString = this.query_string + ' limit 10';
    console.log("queryString", queryString);
    this.restService.soql_query("select id, name from account limit 10").subscribe(
      data => {
        retrievedData=data.body;
        console.log('aman', JSON.parse(JSON.stringify(retrievedData)) );
        this.updateResultsTable(JSON.parse(retrievedData));        
      },
      error => console.log(error));


  }
  updateResultsTable(data){
    this.show_result = true;
    var columns = this.query_object["fields"].split(", ");
    var records = data.records;    
    this.resultsFields = columns;
    records.forEach(rec => {
      let availableKeys = Object.keys(rec);      
      columns.forEach(col => {
        if(availableKeys.indexOf(col)> -1){
          console.log("col", col, rec[col]);
        }
      });
    });
  }

  toggleModal() {
    //this.show_DetailModal =  !this.show_DetailModal;
    Swal({
      title: (this.query_object["object"].length > 0) ? `${this.query_object["object"]} - Related Record` : 'Related Record',
      confirmButtonText: "Close",
      confirmButtonClass: "confirmButtonClass"
    });
  }
  objectChangeHandler(event: any) {
    this.query_object["object"] = '';
    if(event.target.value !== 'Select an Object'){
      this.query_string = "SELECT * FROM " + event.target.value;
      this.query_object["object"] = event.target.value;
    }
    
  }
  fieldsChangeHandler(options) {
    var selectedOptionsArr = Array.apply(null,options).filter(option => option.selected).map(option => option.value);
    this.query_object["fields"] = selectedOptionsArr.join(", ")
    console.log("event.target.value", this.query_object["fields"]);
    this.query_string = "SELECT " + this.query_object["fields"] + " FROM " + this.query_object["object"];
    /*this.query_object["fields"] = event.target.value;*/
  }

  createQuery(): FormGroup {
    return this.fb.group({
      name: "",
      description: "",
      price: ""
    });
  }

  addAnotherQuery() {
    this.queryArr = this.queryForm.get("queryArr") as FormArray;
    this.queryArr.push(this.createQuery());
  }
  removeQuery(index){
    this.queryArr = this.queryForm.get("queryArr") as FormArray;
    if(this.queryArr.length > 1)
      this.queryArr.removeAt(index);
  }
}
