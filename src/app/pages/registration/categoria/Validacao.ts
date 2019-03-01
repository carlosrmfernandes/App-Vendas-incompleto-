
export class Validacao {
  constructor() { }

 static validacao(itens,param, result) {
    var valorExistente: number = 0;
    if (itens.produto == '' || itens.produto == undefined) {
      alert("Não existe produto para der adicionado");
      return false;
    }
    if (itens.preco == '' || itens.preco == undefined) {
      alert("Não existe preço para esse produto");
      return false;
    }
    if(param.itens!=null){
      param.itens.forEach((value) => {
        if (value.produto == itens.produto) {
          valorExistente = 1;
          alert("Esse produto já foi adicionado");
          return false;
        }
      });
    }

    if (valorExistente != 1) {
      result(itens);
    }
  }

}
