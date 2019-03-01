import { Component, OnInit } from '@angular/core';
import { HomeHttp } from '../../../resources/home/home.http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  param={
    totalProduto:null,
    totalProdutoPreco:null,
    totalCategoria:null,

  }
  constructor(private homeHttp:HomeHttp) { }

  ngOnInit() {
    this.homeHttp.getTotiasCategoriasProdutos().subscribe((rest)=>{
    this.param.totalCategoria=rest['totalCategoria'];
    this.param.totalProduto=rest['totaisProduto']['produto'];
    this.param.totalProdutoPreco=rest['totaisProduto']['preco'];
    })

  }

}
