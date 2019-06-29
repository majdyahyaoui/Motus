import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloc5Component } from './bloc5.component';

describe('Bloc5Component', () => {
  let component: Bloc5Component;
  let fixture: ComponentFixture<Bloc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
