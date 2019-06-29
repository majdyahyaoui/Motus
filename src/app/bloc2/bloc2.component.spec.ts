import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloc2Component } from './bloc2.component';

describe('Bloc2Component', () => {
  let component: Bloc2Component;
  let fixture: ComponentFixture<Bloc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
