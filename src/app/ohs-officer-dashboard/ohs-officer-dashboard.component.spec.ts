import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhsOfficerDashboardComponent } from './ohs-officer-dashboard.component';

describe('OhsOfficerDashboardComponent', () => {
  let component: OhsOfficerDashboardComponent;
  let fixture: ComponentFixture<OhsOfficerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhsOfficerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhsOfficerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
