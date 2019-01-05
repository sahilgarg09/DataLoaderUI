import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgToOrgComponent } from './org-to-org.component';

describe('OrgToOrgComponent', () => {
  let component: OrgToOrgComponent;
  let fixture: ComponentFixture<OrgToOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgToOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgToOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
