import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/resources/categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $AB from 'jquery';
import * as bootbox from 'bootbox';
import { Validacao } from './Validacao';
import { Subscriber } from 'rxjs';
import { Util } from './Util';
declare var $: any;

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: any = [];
  produto: any;
  preco: any;
  visivel;
  title: any;
  param = {
    id: null,
    categoria: null,
    itens: [],
  };
  constructor(private categoriaService: CategoriaService, private routa: ActivatedRoute) { }

  ngOnInit() {
   Util.inicialisarTable(this.categoriaService, this.routa,(resul)=>{
    this.categorias=resul;
   });
  }
  addLinha() {
    var itens: any = {
      id: null,
      produto: this.produto,
      preco: this.preco,
    }
     Validacao.validacao(itens,this.param,(result)=>{
      this.produto=null;
      this.preco=null;
      if(this.param.itens == null) {
        this.param.itens=[];
      }
      this.param.itens.push(result);
    });
  }

  ver(id) {
    this.opemModalReset();
    this.title = "Visualizar";
    this.visivel = true;
    this.categoriaService.getCategoria(id).subscribe((rest) => {
      this.param = {
        id: rest['id'],
        categoria: rest['categoria'],
        itens: rest['produto'],
      };
    });
    $('.bd-example-modal-lg').modal('show');
  }
  editar(id) {
    this.opemModalReset();
    this.title = "Editar";
    this.visivel = false;
    this.categoriaService.getCategoria(id).subscribe((rest) => {
      this.param = {
        id: rest['id'],
        categoria: rest['categoria'],
        itens: rest['produto'],
      };
    });
    $('.bd-example-modal-lg').modal('show');
  }
  apagar(id, i) {
    this.visivel = false;
    var ids = [];

    ids.push(id)
    var param = { ids: ids }
    this.categoriaService.destroyCategoria(param).subscribe((ret) => {
      alert(ret['categoria']);
      var categorias = this.categorias;
      categorias.splice(i, 1);
      this.categorias = categorias;
    });
  }

  copiar(id) {
    this.opemModalReset();
    this.title = "Copiar";
    this.visivel = false;
    this.categoriaService.getCategoria(id).subscribe((rest) => {
      this.param = {
        id: null,
        categoria: null,
        itens: rest['produto'],
      };
      for (let key in this.param.itens) {
        this.param.itens[key]['id'] = null;
      }

    });
    $('.bd-example-modal-lg').modal('show');
  }

  onSubmit() {
    if (this.param.categoria == null || this.param.categoria == '') {
      alert("Não existe Categória");
      return false;
    }
    this.categoriaService.postCategoria(this.param).subscribe((ret) => {
      if (ret['erro']) {
        alert(ret['erro']['categoria']);
      } else {
        $('.bd-example-modal-lg').modal('hide');
        alert(ret);
        Util.inicialisarTable(this.categoriaService, this.routa,(resul)=>{
          this.categorias=resul;
         });
      }
    });
  }

  opemModalReset() {
    this.title = "Nova categoria";
    this.visivel = false;
    this.produto= null;
    this.preco= null;
    Util.resetarFormModal(this.param);
    $('.bd-example-modal-lg').modal('show');
  }

  removerLinha(i) {
    Util.removerLinha(i, this.param.itens);
  }
}
