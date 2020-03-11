import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobanalysisComponent } from './edit-jobanalysis.component';

describe('EditJobanalysisComponent', () => {
  let component: EditJobanalysisComponent;
  let fixture: ComponentFixture<EditJobanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJobanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
