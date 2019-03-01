import { Injectable } from '@angular/core';
import { Api } from '../api';

@Injectable({
  providedIn: 'root'
})
export class CategoriaHttp {

  constructor(private api:Api) { }

  get(id=null){
   return this.api.get("get_categoria",id);
  }
  post(body){
    return this.api.post("criar_categoria",body);
   }
   destroy(body){
    return this.api.destroy("delete_categoria",body);
  }

}
