import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerhomeComponent } from './photographerhome.component';

describe('PhotographerhomeComponent', () => {
  let component: PhotographerhomeComponent;
  let fixture: ComponentFixture<PhotographerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
