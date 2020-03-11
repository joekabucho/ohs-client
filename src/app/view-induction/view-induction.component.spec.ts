import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInductionComponent } from './view-induction.component';

describe('ViewInductionComponent', () => {
  let component: ViewInductionComponent;
  let fixture: ComponentFixture<ViewInductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
