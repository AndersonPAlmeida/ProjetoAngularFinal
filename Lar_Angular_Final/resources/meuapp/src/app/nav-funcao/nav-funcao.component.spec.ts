import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFuncaoComponent } from './nav-funcao.component';

describe('NavFuncaoComponent', () => {
  let component: NavFuncaoComponent;
  let fixture: ComponentFixture<NavFuncaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFuncaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
