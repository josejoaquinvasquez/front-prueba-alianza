import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente'

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

    private url:string ="http://localhost:8080/cliente";

  constructor(private http:HttpClient) { }

  //Obtener clientes
  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + '/listar');
  }

  //crear un cliente
  create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url + '/crear' , cliente);
  }

  get(sharedkey:string):Observable<Cliente[]>{
    let params = new HttpParams();

    params = params.append('sharedkey', sharedkey);
    return this.http.get<Cliente[]>(this.url + '/buscar-por-sharedkey', { params: params });
  }
}
