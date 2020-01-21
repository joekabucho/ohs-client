import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkpermitComponent } from './edit-workpermit.component';

describe('EditWorkpermitComponent', () => {
  let component: EditWorkpermitComponent;
  let fixture: ComponentFixture<EditWorkpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
