"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcao = void 0;
function funcao(string1, age) {
    console.log(this);
    console.log(string1, age);
}
exports.funcao = funcao;
funcao.call(new Date, 'RISOS RISOS', 30);
funcao.apply(new Date, ['ARA ARA', 12]);
