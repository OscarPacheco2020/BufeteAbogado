import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caso } from '../models/caso';

@Injectable({
  providedIn: 'root',
})
export class CasoService {
  casoUrl = 'http://localhost:8080/caso';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Caso[]> {
    return this.httpClient.get<Caso[]>(this.casoUrl + '/');
  }

  public detail(id: number): Observable<Caso> {
    return this.httpClient.get<Caso>(this.casoUrl + `/${id}`);
  }

  public save(caso: Caso): Observable<any>{
    return this.httpClient.post<any>(this.casoUrl +'/', caso);
  }

  public update(id: number, caso: Caso): Observable<any> {
    return this.httpClient.put<any>(this.casoUrl + `/${id}` , caso);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.casoUrl + `/${id}`);
  }

  public listaForCliente(id: number): Observable<Caso[]> {
    return this.httpClient.get<Caso[]>(this.casoUrl + '/cliente' + `/${id}`);
  }

}
