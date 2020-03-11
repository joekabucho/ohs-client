import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobanalysisComponent } from './add-jobanalysis.component';

describe('AddJobanalysisComponent', () => {
  let component: AddJobanalysisComponent;
  let fixture: ComponentFixture<AddJobanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
