import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeResourceModule } from 'src/app/resources/home/home.module';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeResourceModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
