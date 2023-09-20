"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, _sobrenome, idade, cpf) {
        this.nome = nome;
        this._sobrenome = _sobrenome;
        this.idade = idade;
        this.cpf = cpf;
        this.sobrenome = _sobrenome;
    }
    get sobrenome() {
        console.log("GETTER CHAMADO");
        return this._sobrenome;
    }
    set sobrenome(sobrenome) {
        console.log('SETTER CHAMADO');
        this._sobrenome = sobrenome;
    }
    getCpf() {
        return this.cpf.replace(/\D/g, '');
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
}
exports.Pessoa = Pessoa;
const pessoa1 = new Pessoa('Winy', 'Zanin', 23, '000111222-22');
pessoa1.sobrenome = 'Risos Risos';
console.log("Imprimindo: " + pessoa1.sobrenome);
