import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerregisterComponent } from './photographerregister.component';

describe('PhotographerregisterComponent', () => {
  let component: PhotographerregisterComponent;
  let fixture: ComponentFixture<PhotographerregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
