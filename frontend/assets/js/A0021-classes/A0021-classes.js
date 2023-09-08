"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
class Empresa {
    constructor(nome, cnpj) {
        this.colaboradores = [];
        this.nome = nome;
        this.cnpj = cnpj;
    }
    adicionaColaborador(colaborador) {
        this.colaboradores.push(colaborador);
    }
    mostrarColaboradores() {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}
exports.Empresa = Empresa;
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
exports.Colaborador = Colaborador;
;
const empresa1 = new Empresa('RISOS RISOS LTDA', '11.111.111/0001-11');
console.log(empresa1);
console.log(empresa1.nome);
const colaborador1 = new Colaborador('Winy', 'Zanin');
const colaborador2 = new Colaborador('Marshall', 'Matters');
const colaborador3 = new Colaborador('Cavalo', 'Manco');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
empresa1.adicionaColaborador({ nome: 'Sandero tunado', sobrenome: '2008' });
empresa1.mostrarColaboradores();
