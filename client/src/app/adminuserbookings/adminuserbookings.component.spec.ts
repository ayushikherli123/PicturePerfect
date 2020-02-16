import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserbookingsComponent } from './adminuserbookings.component';

describe('AdminuserbookingsComponent', () => {
  let component: AdminuserbookingsComponent;
  let fixture: ComponentFixture<AdminuserbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuserbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
