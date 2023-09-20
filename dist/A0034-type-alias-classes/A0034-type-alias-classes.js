"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    ;
    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    }
    ;
}
exports.Pessoa = Pessoa;
const p1 = new Pessoa('Aline', 'Bahouse');
console.log(p1.nomeCompleto());
