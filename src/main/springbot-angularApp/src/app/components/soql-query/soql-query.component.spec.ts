import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoqlQueryComponent } from './soql-query.component';

describe('SoqlQueryComponent', () => {
  let component: SoqlQueryComponent;
  let fixture: ComponentFixture<SoqlQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoqlQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoqlQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
