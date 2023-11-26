// nueva-categoria.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StrapiRequestsService } from 'src/app/services/strapi-requests.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent {
  categoriaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private strapiRequestsService: StrapiRequestsService
  ) {
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  onSubmit() {
    const nombre = this.categoriaForm.value.nombre;
    this.strapiRequestsService.nuevaCategoria(nombre).subscribe(
      response => {
        console.log('Categoria creada:', response);
      },
      error => {
        console.error('Error al crear la categoría:', error);
      }
    );
  }
}
