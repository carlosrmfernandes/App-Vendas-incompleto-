import { Injectable } from '@angular/core';
import { CategoriaHttp } from './categoria.http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private categoriaHttp:CategoriaHttp) { }

  getCategoria(id=null){
    return this.categoriaHttp.get(id);
  }
  postCategoria(body){
    return this.categoriaHttp.post(body);
  }
  destroyCategoria(body){
    return this.categoriaHttp.destroy(body);
  }


}
