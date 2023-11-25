import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HttpClientModule } from '@angular/common/http';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
import { NuevaCategoriaComponent } from './components/nueva-categoria/nueva-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    SubirImagenComponent,
    NuevaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
