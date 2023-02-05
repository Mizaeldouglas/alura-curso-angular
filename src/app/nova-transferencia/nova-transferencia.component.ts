import {Component, EventEmitter, Output} from '@angular/core';
import {TransferenciaService} from '../services/transferencia.service';
import {Transferencia} from '../services/model/transferencia.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {
  }

  transferir(): void {
    // console.log('Solicitada nova transferência');
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);

    const valoremitir: Transferencia = { valor: this.valor, destino: this.destino };


    this.service.adicionar(valoremitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
      error => console.error(error)
      );

    // this.limparCampos();
  }
  limparCampos(): void {
    // @ts-ignore
    this.destino = '';
    // @ts-ignore
    this.valor = '';
  }
}
