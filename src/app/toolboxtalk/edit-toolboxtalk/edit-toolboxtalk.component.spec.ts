import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditToolboxtalkComponent } from './edit-toolboxtalk.component';

describe('EditToolboxtalkComponent', () => {
  let component: EditToolboxtalkComponent;
  let fixture: ComponentFixture<EditToolboxtalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditToolboxtalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditToolboxtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
