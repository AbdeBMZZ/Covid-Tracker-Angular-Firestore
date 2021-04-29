import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaledComponent } from './hospitaled.component';

describe('HospitaledComponent', () => {
  let component: HospitaledComponent;
  let fixture: ComponentFixture<HospitaledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitaledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitaledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
