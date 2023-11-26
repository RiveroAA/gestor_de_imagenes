import { Component } from '@angular/core';
import { StrapiRequestsService } from 'src/app/services/strapi-requests.service';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css']
})
export class SubirImagenComponent {
  selectedFile: File | null = null;

  constructor(private strapiRequestsService: StrapiRequestsService) {
    this.selectedFile = null;
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  subirGuardarImagen(): void {
    if (this.selectedFile) {
      this.strapiRequestsService.subirImagen(this.selectedFile).subscribe(
        (response) => {
          const imageUrl = response[0]?.data.attributes.foto.data.attributes.url;
      
          if (imageUrl) {
            const data = {
              foto: imageUrl,
            };
      
            this.strapiRequestsService.guardarImagen(data).subscribe(
              (record) => {
                // Handle success
                console.log('Registro creado:', record);
              },
              (error) => {
                // Handle error al crear el registro
                console.error('Error al crear el registro:', error);
              }
            );
          }
        },
        (error) => {
          // Handle error al cargar la imagen
          console.error('Error al cargar la imagen:', error);
      
          // Aquí puedes agregar más detalles sobre el error, si es necesario
          if (error.status === 0) {
            console.error('Error de CORS o configuración de la API');
          }
        }
      );
      
    }
  }

}