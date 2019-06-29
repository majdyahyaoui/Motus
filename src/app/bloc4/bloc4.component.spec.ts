import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloc4Component } from './bloc4.component';

describe('Bloc4Component', () => {
  let component: Bloc4Component;
  let fixture: ComponentFixture<Bloc4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloc4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
