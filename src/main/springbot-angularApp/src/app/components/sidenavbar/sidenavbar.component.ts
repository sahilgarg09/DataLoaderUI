import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})


export class SidenavbarComponent implements OnInit {

  queries: Query[] = [
    { id: 1, name: 'Export', shortName: 'EX', url: '/export', class: 'nav-item' },
    { id: 2, name: 'Insert', shortName: 'IN', url: '/insert', class: 'nav-item' },
    { id: 3, name: 'Upsert', shortName: 'UP', url: '/upsert', class: 'nav-item' },
    { id: 4, name: 'Delete', shortName: 'DE', url: '/delete-query', class: 'nav-item' }
  ];
  selectedQuery: Query;
  isHidden= false;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

  onSelectLink(query: Query): void {
    this.selectedQuery = query;
    this.panelOpenState = true;
  }

}
export class Query {
  id: number;
  name: string;
  shortName: string;
  url: string;
  class: string;
}

