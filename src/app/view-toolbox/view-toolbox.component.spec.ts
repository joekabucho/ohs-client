import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToolboxComponent } from './view-toolbox.component';

describe('ViewToolboxComponent', () => {
  let component: ViewToolboxComponent;
  let fixture: ComponentFixture<ViewToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
