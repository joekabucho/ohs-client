import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobcardComponent } from './list-jobcard.component';

describe('ListJobcardComponent', () => {
  let component: ListJobcardComponent;
  let fixture: ComponentFixture<ListJobcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJobcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
