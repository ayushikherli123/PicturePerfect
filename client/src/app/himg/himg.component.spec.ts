import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HimgComponent } from './himg.component';

describe('HimgComponent', () => {
  let component: HimgComponent;
  let fixture: ComponentFixture<HimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
