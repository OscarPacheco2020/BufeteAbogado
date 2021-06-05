import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoCaso } from '../models/tipo-caso';

@Injectable({
  providedIn: 'root'
})
export class TipoCasoService {

  tipocasoUrl = 'http://localhost:8080/api/v1.0/tipoCaso';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<TipoCaso[]>{
    return this.httpClient.get<TipoCaso[]>(this.tipocasoUrl + '/');
  }

  public detail(id: number): Observable<TipoCaso> {
    return this.httpClient.get<TipoCaso>(this.tipocasoUrl + `/${id}`);
  }

  public save(tipocaso: TipoCaso): Observable<any>{
    return this.httpClient.post<any>(this.tipocasoUrl +'/', tipocaso);
  }

  public update(id: number, tipocaso: TipoCaso): Observable<any> {
    return this.httpClient.put<any>(this.tipocasoUrl + `/${id}` , tipocaso);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.tipocasoUrl + `/${id}`);
  }

}
