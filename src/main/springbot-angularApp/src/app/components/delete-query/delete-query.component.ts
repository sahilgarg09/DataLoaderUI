import { Component, OnInit } from '@angular/core';

export interface Objects {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-delete-query',
  templateUrl: './delete-query.component.html',
  styleUrls: ['./delete-query.component.css']
})
export class DeleteQueryComponent implements OnInit {

  objects: Objects[] = [
    {value: '', viewValue: 'Select an Object'},
    {value: 'AcceptedEventRelation', viewValue: 'AcceptedEventRelation'},
    {value: 'Account', viewValue: 'Account'},
    {value: 'AccountBrand', viewValue: 'AccountBrand'},
    {value: 'AccountBrandShare', viewValue: 'AccountBrandShare'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
