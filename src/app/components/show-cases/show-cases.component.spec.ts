import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCasesComponent } from './show-cases.component';

describe('ShowCasesComponent', () => {
  let component: ShowCasesComponent;
  let fixture: ComponentFixture<ShowCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
