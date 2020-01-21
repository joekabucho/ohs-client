import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobcardComponent } from './edit-jobcard.component';

describe('EditJobcardComponent', () => {
  let component: EditJobcardComponent;
  let fixture: ComponentFixture<EditJobcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJobcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
