import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkpermitComponent } from './add-workpermit.component';

describe('AddWorkpermitComponent', () => {
  let component: AddWorkpermitComponent;
  let fixture: ComponentFixture<AddWorkpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
