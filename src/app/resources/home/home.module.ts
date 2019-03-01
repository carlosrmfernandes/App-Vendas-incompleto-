import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHttp } from './home.http';
import { HomeService } from './home.service';

@NgModule({
  declarations: [],
  imports: [

CommonModule
  ],
  providers:[
    HomeHttp,
    HomeService
  ]
})
export class HomeResourceModule { }
