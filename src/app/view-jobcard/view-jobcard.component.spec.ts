import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobcardComponent } from './view-jobcard.component';

describe('ViewJobcardComponent', () => {
  let component: ViewJobcardComponent;
  let fixture: ComponentFixture<ViewJobcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
