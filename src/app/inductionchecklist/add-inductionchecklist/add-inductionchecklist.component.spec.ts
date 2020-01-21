import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInductionchecklistComponent } from './add-inductionchecklist.component';

describe('AddInductionchecklistComponent', () => {
  let component: AddInductionchecklistComponent;
  let fixture: ComponentFixture<AddInductionchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInductionchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInductionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
