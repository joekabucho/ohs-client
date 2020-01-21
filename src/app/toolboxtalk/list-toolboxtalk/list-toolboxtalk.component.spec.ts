import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToolboxtalkComponent } from './list-toolboxtalk.component';

describe('ListToolboxtalkComponent', () => {
  let component: ListToolboxtalkComponent;
  let fixture: ComponentFixture<ListToolboxtalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListToolboxtalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToolboxtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
