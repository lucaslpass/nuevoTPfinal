import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosLoginComponent } from './proyectos-login.component';

describe('ProyectosLoginComponent', () => {
  let component: ProyectosLoginComponent;
  let fixture: ComponentFixture<ProyectosLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
