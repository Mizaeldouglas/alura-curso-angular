import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    // console.log('Solicitada nova transferência');
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);

    const valoremitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valoremitir);
    this.limparCampos();
  }
  limparCampos() {
    this.destino = 0;
    this.valor = 0;
  }
}
