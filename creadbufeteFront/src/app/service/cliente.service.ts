import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL = 'http://localhost:8080/cliente';

  constructor(private httpClient: HttpClient) { }

  public list(page: number, size: number, order: string, asc: boolean): Observable<any> {
    return this.httpClient.get<any>(this.clienteURL + '/?' +  `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  public detail(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.clienteURL + `/${id}` );
  }

  public save(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.clienteURL + '/', cliente);
  }

  public update(id: number, cliente: Cliente): Observable<any> {
    return this.httpClient.put<any>(this.clienteURL + `/${id}` , cliente);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.clienteURL + `/${id}`);
  }

}
