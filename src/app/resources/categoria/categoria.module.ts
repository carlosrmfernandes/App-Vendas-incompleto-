import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaHttp } from './categoria.http';
import { CategoriaService } from './categoria.service';

@NgModule({
  declarations: [],
  imports: [
  CommonModule
  ],
  providers:[
    CategoriaHttp,
    CategoriaService
  ]
})
export class CategoriaResourceModule { }
