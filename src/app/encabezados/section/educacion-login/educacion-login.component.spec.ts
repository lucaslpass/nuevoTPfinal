import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionLoginComponent } from './educacion-login.component';

describe('EducacionLoginComponent', () => {
  let component: EducacionLoginComponent;
  let fixture: ComponentFixture<EducacionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
