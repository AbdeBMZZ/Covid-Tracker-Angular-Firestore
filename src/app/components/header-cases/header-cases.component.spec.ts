import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCasesComponent } from './header-cases.component';

describe('HeaderCasesComponent', () => {
  let component: HeaderCasesComponent;
  let fixture: ComponentFixture<HeaderCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
