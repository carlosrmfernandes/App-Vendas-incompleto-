import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api {

  urls='http://localhost:8888/api-vendas/public/api'

  constructor(private api:HttpClient) {

   }
  get(endpoint, id=null){
    if(id){
      endpoint+='/'+id;
    }
   return this.api.get(`${this.urls}/${endpoint}`);
  }
  post(endpoint, body){
    return this.api.post(`${this.urls}/${endpoint}`, body);
  }
  destroy(endpoint, body){
    return this.api.post(`${this.urls}/${endpoint}`,body);
  }
}
