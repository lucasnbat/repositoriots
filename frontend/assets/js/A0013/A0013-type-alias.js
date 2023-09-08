"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCorPreferida = void 0;
const pessoa = {
    nome: 'Eliziane',
    idade: 30,
    salario: 200000,
};
function setCorPreferida(pessoa, cor) {
    return { ...pessoa, corPreferida: cor };
}
exports.setCorPreferida = setCorPreferida;
console.log(setCorPreferida(pessoa, 'Vermelho'));
console.log(pessoa);
