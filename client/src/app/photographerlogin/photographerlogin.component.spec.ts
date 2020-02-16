import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerloginComponent } from './photographerlogin.component';

describe('PhotographerloginComponent', () => {
  let component: PhotographerloginComponent;
  let fixture: ComponentFixture<PhotographerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
