import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaResourceModule } from '../../../resources/categoria/categoria.module';

import { CategoriaComponent } from './categoria.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: CategoriaComponent
  },
  {
    path: ":id",
    component: CategoriaComponent
  }
];

@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CategoriaResourceModule,
    RouterModule.forChild(routes)
  ]
})

export class CategoriaModule { }
