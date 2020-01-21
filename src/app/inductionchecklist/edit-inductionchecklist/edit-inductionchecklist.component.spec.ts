import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInductionchecklistComponent } from './edit-inductionchecklist.component';

describe('EditInductionchecklistComponent', () => {
  let component: EditInductionchecklistComponent;
  let fixture: ComponentFixture<EditInductionchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInductionchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInductionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
