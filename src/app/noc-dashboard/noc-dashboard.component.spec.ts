import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NocDashboardComponent } from './noc-dashboard.component';

describe('NocDashboardComponent', () => {
  let component: NocDashboardComponent;
  let fixture: ComponentFixture<NocDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NocDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NocDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
