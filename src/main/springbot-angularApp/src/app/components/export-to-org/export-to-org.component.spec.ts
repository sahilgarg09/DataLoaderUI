import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToOrgComponent } from './export-to-org.component';

describe('ExportToOrgComponent', () => {
  let component: ExportToOrgComponent;
  let fixture: ComponentFixture<ExportToOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportToOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportToOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
