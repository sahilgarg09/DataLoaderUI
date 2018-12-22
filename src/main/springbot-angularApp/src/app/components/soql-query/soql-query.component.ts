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
   this.getAllObjects();


  }
  
  listOfAllObjects=[];
  soql_query: String = "SELECT Id FROM Account";
  show_result: Boolean = false;
  result=[];
  columns=[];
  resultsFields=[];
  show_DetailModal: Boolean = false;
  query_string: String = "";
  query_object: Object = {};

  objects: String[] = [
    'Select an Object',
  ];

  nulls: Nulls[] = [
    { value: "nulls-first", viewValue: "Nulls First" },
    { value: "nulls-last", viewValue: "Nulls Last" }
  ];

  operators: Operators[] = [
    { value: "=", viewValue: "=" },
    { value: "!=", viewValue: "!=" }
  ];
  fields: Fields[] = [];
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
    this.restService.soql_query(queryString).subscribe(
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
    this.columns = columns;
    this.resultsFields=records;
    console.log("columns"+ this.columns);
    console.log("records"+ JSON.parse(JSON.stringify(records)));
    records.forEach(rec => {
     // console.log("rec"+ rec.Id);   
      // columns.forEach(col => {
      //   if(availableKeys.indexOf(col)> -1){
      //     console.log("col", col, rec[col]);
      //   }
      // });
    });
  }


  //get the list of all objects to show in dropdown

getAllObjects(){
  this.restService.getAllOrgObjects().subscribe(
    data => {
      data.sobjects.forEach(element => {
        this.objects.push(element.name)
      });
     
      console.log('aman1', JSON.parse(JSON.stringify(this.objects)) );
     //this.getFieldsObj();
          
    },
    error => console.log(error));

}

  getFieldsObj(objectName: string){
    this.restService.getFieldsOfObject(objectName).subscribe(
      data => {
       data.fields.forEach(element => {
         this.fields.push({ value: element.name, viewValue: element.label })
       });
         
        console.log('aman3', JSON.parse(JSON.stringify(data)));
            
      },
      error => console.log(error));


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
    //added by aman for fetching fields for particular objects
    if(event.target.value !== 'Select an Object')
     {
      this.getFieldsObj(event.target.value);
     }

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
