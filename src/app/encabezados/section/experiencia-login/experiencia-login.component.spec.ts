import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLoginComponent } from './experiencia-login.component';

describe('ExperienciaLoginComponent', () => {
  let component: ExperienciaLoginComponent;
  let fixture: ComponentFixture<ExperienciaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
