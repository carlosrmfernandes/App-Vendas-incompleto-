import { Injectable } from '@angular/core';
import { Api } from '../api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeHttp {

  constructor(private api:Api, private http:HttpClient) {
  }
  getTotiasCategoriasProdutos(){
  return this.http.get('http://localhost:8888/api-vendas/public/api/get_totais_categoria_produtos');
  }
}
