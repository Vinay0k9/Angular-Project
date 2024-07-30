import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdeptartmentComponent } from './aboutdeptartment.component';

describe('AboutdeptartmentComponent', () => {
  let component: AboutdeptartmentComponent;
  let fixture: ComponentFixture<AboutdeptartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutdeptartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutdeptartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
