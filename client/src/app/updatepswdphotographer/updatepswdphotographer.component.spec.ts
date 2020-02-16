import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepswdphotographerComponent } from './updatepswdphotographer.component';

describe('UpdatepswdphotographerComponent', () => {
  let component: UpdatepswdphotographerComponent;
  let fixture: ComponentFixture<UpdatepswdphotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepswdphotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepswdphotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
