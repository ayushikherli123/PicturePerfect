import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterhomeComponent } from './registerhome.component';

describe('RegisterhomeComponent', () => {
  let component: RegisterhomeComponent;
  let fixture: ComponentFixture<RegisterhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
