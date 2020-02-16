import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminthemesComponent } from './adminthemes.component';

describe('AdminthemesComponent', () => {
  let component: AdminthemesComponent;
  let fixture: ComponentFixture<AdminthemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminthemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminthemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
