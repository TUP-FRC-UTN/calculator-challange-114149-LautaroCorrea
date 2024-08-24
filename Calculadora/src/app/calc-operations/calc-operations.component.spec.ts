import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcOperationsComponent } from './calc-operations.component';

describe('CalcOperationsComponent', () => {
  let component: CalcOperationsComponent;
  let fixture: ComponentFixture<CalcOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcOperationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
