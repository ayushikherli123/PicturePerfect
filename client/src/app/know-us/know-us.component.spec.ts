import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowUsComponent } from './know-us.component';

describe('KnowUsComponent', () => {
  let component: KnowUsComponent;
  let fixture: ComponentFixture<KnowUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
