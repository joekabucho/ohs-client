import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobanalysisComponent } from './list-jobanalysis.component';

describe('ListJobanalysisComponent', () => {
  let component: ListJobanalysisComponent;
  let fixture: ComponentFixture<ListJobanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJobanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
