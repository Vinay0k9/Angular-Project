import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptstaffattendanceentryComponent } from './deptstaffattendanceentry.component';

describe('DeptstaffattendanceentryComponent', () => {
  let component: DeptstaffattendanceentryComponent;
  let fixture: ComponentFixture<DeptstaffattendanceentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptstaffattendanceentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptstaffattendanceentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
