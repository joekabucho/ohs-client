import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkpermitComponent } from './list-workpermit.component';

describe('ListWorkpermitComponent', () => {
  let component: ListWorkpermitComponent;
  let fixture: ComponentFixture<ListWorkpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWorkpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
