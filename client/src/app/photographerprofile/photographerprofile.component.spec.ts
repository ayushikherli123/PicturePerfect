import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerprofileComponent } from './photographerprofile.component';

describe('PhotographerprofileComponent', () => {
  let component: PhotographerprofileComponent;
  let fixture: ComponentFixture<PhotographerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
