import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptstaffhomepageComponent } from './deptstaffhomepage.component';

describe('DeptstaffhomepageComponent', () => {
  let component: DeptstaffhomepageComponent;
  let fixture: ComponentFixture<DeptstaffhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptstaffhomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptstaffhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
