import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminphotographersComponent } from './adminphotographers.component';

describe('AdminphotographersComponent', () => {
  let component: AdminphotographersComponent;
  let fixture: ComponentFixture<AdminphotographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminphotographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminphotographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
