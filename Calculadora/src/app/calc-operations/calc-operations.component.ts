import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-calc-operations',
  standalone: true,
  imports: [],
  templateUrl: './calc-operations.component.html',
  styleUrl: './calc-operations.component.css'
})
export class CalcOperationsComponent {
  @Input() primerNroRecibido?: number;
  @Input() segundoNroRecibido?: number;
  @Output() operationData: EventEmitter<number> = new EventEmitter();
  @Output() cleanInputs: EventEmitter<boolean> = new EventEmitter();

  add() {
    this.operationData.emit(
      Number(this.primerNroRecibido) + Number(this.segundoNroRecibido)
    );
  }
  minus() {
    this.operationData.emit(
      Number(this.primerNroRecibido) - Number(this.segundoNroRecibido)
    );
  }
  multiply() {
    this.operationData.emit(
      Number(this.primerNroRecibido) * Number(this.segundoNroRecibido)
    );
  }
  divide() {
    if (Number(this.segundoNroRecibido) == 0) this.operationData.emit(0);
    else
      this.operationData.emit(
        Number(this.primerNroRecibido) / Number(this.segundoNroRecibido)
      );
  }
  exp() {
    this.operationData.emit(
      Math.pow(Number(this.primerNroRecibido), Number(this.segundoNroRecibido))
    );
  }
  clean() {
    this.cleanInputs.emit();
  }
}
