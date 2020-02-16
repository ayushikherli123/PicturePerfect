import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerbookingsComponent } from './photographerbookings.component';

describe('PhotographerbookingsComponent', () => {
  let component: PhotographerbookingsComponent;
  let fixture: ComponentFixture<PhotographerbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
