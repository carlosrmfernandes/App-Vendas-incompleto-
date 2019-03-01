

export class Util {

  constructor() { }

  static inicialisarTable(categoriaService,routa,resul){
    categoriaService.getCategoria(routa.snapshot.params.id).subscribe((rest) => {
     resul(rest['categoria'])
    });
  }

  static removerLinha(i, iten) {
    var itens = iten;
    itens.splice(i, 1);
    itens = iten;
  }
  static resetarFormModal(param) {
    param.itens = null;
    param.categoria = null;
    param.id = null;
  }
}
