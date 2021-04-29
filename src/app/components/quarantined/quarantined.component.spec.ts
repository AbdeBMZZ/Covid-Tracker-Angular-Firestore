import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarantinedComponent } from './quarantined.component';

describe('QuarantinedComponent', () => {
  let component: QuarantinedComponent;
  let fixture: ComponentFixture<QuarantinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarantinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarantinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
