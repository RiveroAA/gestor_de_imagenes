import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StrapiRequestsService {
  constructor(private http: HttpClient) { }

  obtenerImagenes(): Observable<string[]> {    
    return this.http.get<any[]>('http://localhost:1337/api/pruebas?populate=*');
  }   
}