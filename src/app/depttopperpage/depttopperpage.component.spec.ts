import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepttopperpageComponent } from './depttopperpage.component';

describe('DepttopperpageComponent', () => {
  let component: DepttopperpageComponent;
  let fixture: ComponentFixture<DepttopperpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepttopperpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepttopperpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
