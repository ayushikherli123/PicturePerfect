import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserqueryComponent } from './adminuserquery.component';

describe('AdminuserqueryComponent', () => {
  let component: AdminuserqueryComponent;
  let fixture: ComponentFixture<AdminuserqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuserqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuserqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
