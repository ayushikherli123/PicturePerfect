import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatephotographerprofileComponent } from './updatephotographerprofile.component';

describe('UpdatephotographerprofileComponent', () => {
  let component: UpdatephotographerprofileComponent;
  let fixture: ComponentFixture<UpdatephotographerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatephotographerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatephotographerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
