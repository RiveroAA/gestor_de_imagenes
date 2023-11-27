import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categorias.model';
 
@Injectable({
  providedIn: 'root'
})
export class StrapiRequestsService {
  constructor(private http: HttpClient) { }

  obtenerImagenes(): Observable<string[]> {    
    return this.http.get<any[]>('http://localhost:1337/api/fotos?populate=*');
  }

  obtenerCategorias(): Observable<string[]> {    
    return this.http.get<any[]>('http://localhost:1337/api/categorias');
  }

  nuevaCategoria(categoria: Categoria): Observable<any> {
    console.log(categoria);
    return this.http.post('http://localhost:1337/api/categorias', categoria);
  }
  
  subirImagen(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('files', file);

    return this.http.post('http://localhost:1337/api/upload', formData);
  }

  guardarImagen(data: any): Observable<any> {
    return this.http.post('http://localhost:1337/api/pruebas', data);
  }
}