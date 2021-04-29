import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalCasesComponent } from './critical-cases.component';

describe('CriticalCasesComponent', () => {
  let component: CriticalCasesComponent;
  let fixture: ComponentFixture<CriticalCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
