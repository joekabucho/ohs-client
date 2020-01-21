import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToolboxtalkComponent } from './add-toolboxtalk.component';

describe('AddToolboxtalkComponent', () => {
  let component: AddToolboxtalkComponent;
  let fixture: ComponentFixture<AddToolboxtalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToolboxtalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToolboxtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
