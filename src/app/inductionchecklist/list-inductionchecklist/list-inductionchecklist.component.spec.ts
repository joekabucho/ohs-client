import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInductionchecklistComponent } from './list-inductionchecklist.component';

describe('ListInductionchecklistComponent', () => {
  let component: ListInductionchecklistComponent;
  let fixture: ComponentFixture<ListInductionchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInductionchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInductionchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
