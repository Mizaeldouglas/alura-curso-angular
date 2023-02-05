import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Transferencia} from "./model/transferencia.model";

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }
  get transferencias(): any {
    return this.listaTransferencia;
  }
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia) ;
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: any): void {
    transferencia.data = new Date();
  }
}
