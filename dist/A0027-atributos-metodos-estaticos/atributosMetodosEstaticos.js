"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, _sobrenome, idade, cpf) {
        this.nome = nome;
        this._sobrenome = _sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    static falaOi() {
        console.log('Oi, bixano!!');
    }
    static criaPessoa(nome, sobrenome) {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
    metodoNormal() {
        console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}
exports.Pessoa = Pessoa;
Pessoa.idadePadrao = 0;
Pessoa.cpfPadrao = '000.000.000-00';
const pessoa1 = new Pessoa('Winy', 'Zanin', 23, '000111222-22');
console.log(pessoa1);
pessoa1.metodoNormal();
Pessoa.falaOi();
const pessoa2 = Pessoa.criaPessoa('Lucas', 'Nunes');
console.log(pessoa2);
console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);
