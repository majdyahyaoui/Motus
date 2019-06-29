import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloc3Component } from './bloc3.component';

describe('Bloc3Component', () => {
  let component: Bloc3Component;
  let fixture: ComponentFixture<Bloc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bloc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bloc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
