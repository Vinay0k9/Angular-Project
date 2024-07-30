import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptstaffmarksentryComponent } from './deptstaffmarksentry.component';

describe('DeptstaffmarksentryComponent', () => {
  let component: DeptstaffmarksentryComponent;
  let fixture: ComponentFixture<DeptstaffmarksentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptstaffmarksentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptstaffmarksentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
