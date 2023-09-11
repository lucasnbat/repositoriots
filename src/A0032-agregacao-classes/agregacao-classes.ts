/*eslint-disable*/

//AGREGAÇÃO

/**
 * Agregação funciona quando uma das classes não faz suas funções principais sem a outra;
 * Ex: carrinho compras e produtos;
 * Na associação, tinhamos: escritor --usa--> ferramenta;
 * Aqui temos: carrinho compras <>--agrega-- produtos;
                              (1)         (1..*)
 * Embaixo temos as relações de cardinalidade, indicando que um carrinho pode ter minimo 1 ou vários produtos;
 * Quanto ao simbolo, utilizamos o diamante mesmo, na associação usamos seta ou linha simples;
 */

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) { //for...of usado para iterar sobre VALORES, for...in usado para iterar sobre CHAVES de OBJETOS
      this.produtos.push(produto);
    }
  }

  quantidadeDeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    /*utilizando reduce para somar os preços dos produtos*/
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

//nesse tempo do video ele explica como funciona o get e set modernos = servem para possibilitar a gente fazer get e set depois de criar as classes
export class Produto {
  constructor(public nome: string, public preco: number) { }

}

const produto0 = new Produto('Camiseta', 49.90);
const produto1 = new Produto('Sapato', 90);
const produto2 = new Produto('Terno', 2149.90);
const produto3 = new Produto('Relogio', 89.90);
console.log(produto0.nome);

const carrinho0 = new CarrinhoDeCompras();
carrinho0.inserirProdutos(produto0, produto1, produto2, produto3);
console.log(carrinho0);
console.log('Quantidade de produtos= ' + carrinho0.quantidadeDeProdutos());
console.log('Valor total= ' + carrinho0.valorTotal().toFixed(2));
