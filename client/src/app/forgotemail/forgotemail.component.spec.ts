import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotemailComponent } from './forgotemail.component';

describe('ForgotemailComponent', () => {
  let component: ForgotemailComponent;
  let fixture: ComponentFixture<ForgotemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
