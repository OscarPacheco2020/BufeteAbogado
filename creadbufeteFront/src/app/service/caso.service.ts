import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caso } from '../models/caso';

@Injectable({
  providedIn: 'root',
})
export class CasoService {
  casoUrl = 'http://localhost:8080/api/v1.0/caso';

  constructor(private httpClient: HttpClient) {}

  public lista(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(this.casoUrl + '/?' +  `page=${page}&size=${size}&order=${order}&asc=${asc}`);
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

  public listaForCliente(page: number, size: number, order: string, asc: boolean, id: number): Observable<any> {
    return this.httpClient.get<any>(this.casoUrl + '/cliente' + `/${id}` + '?' +  `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

}
