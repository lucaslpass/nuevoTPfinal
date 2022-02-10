import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardLoginComponent } from './hard-login.component';

describe('HardLoginComponent', () => {
  let component: HardLoginComponent;
  let fixture: ComponentFixture<HardLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
