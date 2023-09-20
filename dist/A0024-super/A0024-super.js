"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = exports.Aluno = exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
    ;
    getIdade() {
        return this.idade;
    }
    getCpf() {
        return this.cpf;
    }
    getNomeCompleto() {
        return `Meu nome é ${this.nome} ${this.sobrenome}`;
    }
}
exports.Pessoa = Pessoa;
const p1 = new Pessoa('Lucas', 'Alves', 21, 'lilil');
console.log(p1.getNomeCompleto());
class Aluno extends Pessoa {
    constructor(nome, sobrenome, idade, cpf, salaAluno) {
        super(nome, sobrenome, idade, cpf);
        this.salaAluno = salaAluno;
    }
    ;
    getNomeCompleto() {
        console.log('[Exemplo de qualquer procedimento feito no metodo do filho e que quero fazer antes do metodo original do pai (classe super)]');
        return super.getNomeCompleto();
    }
}
exports.Aluno = Aluno;
;
class Cliente extends Pessoa {
    getNomeCompleto() {
        console.log("Fazendo qualquer coisa");
        const result = super.getNomeCompleto();
        return result + " [VEJA QUE POSSO ATÉ ALTERAR O RESULT]";
    }
}
exports.Cliente = Cliente;
;
const p2 = new Aluno('Julia', 'Bordignon', 21, 'lilil', '123');
const p3 = new Cliente('João', 'Bordignon', 21, 'lilil');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p1.getNomeCompleto());
console.log(p2.getNomeCompleto());
console.log(p3.getNomeCompleto());
console.log(p2);
