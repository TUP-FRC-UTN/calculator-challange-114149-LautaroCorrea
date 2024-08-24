import { Component } from '@angular/core';
import { CalcOperationsComponent } from "../calc-operations/calc-operations.component";

@Component({
  selector: 'app-calc-inputs',
  standalone: true,
  imports: [CalcOperationsComponent],
  templateUrl: './calc-inputs.component.html',
  styleUrl: './calc-inputs.component.css'
})
export class CalcInputsComponent {
  primerNro: number = 0;
  segundoNro: number = 0;
  resultado: number = 0;
  showResult(event: any) {
    this.resultado = event;
  }
  cleanResult() {
    this.primerNro = 0;
    this.segundoNro = 0;
    this.resultado = 0;
  }
  updateFirstNumber(event: any) {
    this.primerNro = event.target.value;
  }
  updateSecondNumber(event: any) {
    this.segundoNro = event.target.value;
  }
}