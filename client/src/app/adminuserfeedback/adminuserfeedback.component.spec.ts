import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserfeedbackComponent } from './adminuserfeedback.component';

describe('AdminuserfeedbackComponent', () => {
  let component: AdminuserfeedbackComponent;
  let fixture: ComponentFixture<AdminuserfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuserfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
