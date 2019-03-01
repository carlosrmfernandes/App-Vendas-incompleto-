import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { "path": 'categoria', "loadChildren": './pages/registration/categoria/categoria.module#CategoriaModule' },
  { "path": 'home', "loadChildren": './pages/registration/home/home.module#HomeModule' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
