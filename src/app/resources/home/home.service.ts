import { Injectable } from '@angular/core';
import { HomeHttp } from './home.http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private homehttp:HomeHttp) { }


}
