"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperCase = exports.concatString = exports.multiplyArgs = void 0;
function multiplyArgs(...args) {
    return args.reduce((acumulador, valor) => acumulador * valor, 1);
}
exports.multiplyArgs = multiplyArgs;
function concatString(...args) {
    return args.reduce((acumulador, valor) => acumulador + valor);
}
exports.concatString = concatString;
function toUpperCase(...args) {
    return args.map((valor) => valor.toUpperCase());
}
exports.toUpperCase = toUpperCase;
const resultadoSoma = multiplyArgs(1, 2, 3);
console.log(resultadoSoma);
const concatenacao = concatString('a', 'b', 'c');
console.log(concatenacao);
const maiuscula = toUpperCase('a', 'b', 'c');
console.log(maiuscula);
