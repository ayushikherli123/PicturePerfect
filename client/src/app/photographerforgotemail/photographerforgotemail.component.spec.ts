import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerforgotemailComponent } from './photographerforgotemail.component';

describe('PhotographerforgotemailComponent', () => {
  let component: PhotographerforgotemailComponent;
  let fixture: ComponentFixture<PhotographerforgotemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerforgotemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerforgotemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
