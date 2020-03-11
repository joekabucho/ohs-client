import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkpermitsComponent } from './view-workpermits.component';

describe('ViewWorkpermitsComponent', () => {
  let component: ViewWorkpermitsComponent;
  let fixture: ComponentFixture<ViewWorkpermitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkpermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkpermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
