import { Component, OnInit } from '@angular/core';
import { StrapiRequestsService } from 'src/app/services/strapi-requests.service';

interface CategoriaData {
  id: number;
  attributes: {
    nombre: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface CategoriaResponse {
  data: CategoriaData[];
}

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent {
  categorias: CategoriaData[] = [];
  constructor(private strapiRequestsService: StrapiRequestsService) { }
  ngOnInit(){
    this.strapiRequestsService.obtenerCategorias().subscribe(
      (data: any) => {
        this.categorias = data.data;
        console.log(this.categorias);
      },
      (error: any) => {
        console.error('Error al obtener categorías:', error);
      }
    );
  }
}