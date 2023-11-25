import { Component, OnInit } from '@angular/core';
import { StrapiRequestsService } from 'src/app/services/strapi-requests.service';

interface ImagenData {
  attributes: {
    foto: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface ImagenResponse {
  data: {
    attributes: {
      foto: {
        data: ImagenData[];
      };
    };
  };
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent implements OnInit {
  imagenes: ImagenData[] = [];

  constructor(private strapiRequestsService: StrapiRequestsService) { }

  ngOnInit() {
    this.strapiRequestsService.obtenerImagenes().subscribe(
      (data: any) => {
        this.imagenes = data.data;
        console.log(this.imagenes)
      },
      (error: any) => {
        console.error('Error al obtener imágenes:', error);
      }
    );
  }
}