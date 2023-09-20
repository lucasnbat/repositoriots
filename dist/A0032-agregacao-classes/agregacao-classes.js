"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = exports.CarrinhoDeCompras = void 0;
class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }
    inserirProdutos(...produtos) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }
    quantidadeDeProdutos() {
        return this.produtos.length;
    }
    valorTotal() {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}
exports.CarrinhoDeCompras = CarrinhoDeCompras;
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
exports.Produto = Produto;
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
