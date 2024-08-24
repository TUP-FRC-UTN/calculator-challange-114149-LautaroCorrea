import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcInputsComponent } from './calc-inputs.component';

describe('CalcInputsComponent', () => {
  let component: CalcInputsComponent;
  let fixture: ComponentFixture<CalcInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
