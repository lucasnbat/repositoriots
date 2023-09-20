"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
function semRetorno(...args) {
    console.log(args.join(' '));
}
semRetorno('Lucas', 'Nunes');
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Julia',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};
exports.pessoa = pessoa;
pessoa.exibirNome();
