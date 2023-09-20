"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Udemy = exports.Empresa = void 0;
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
    getNome() {
        return this.nome;
    }
}
exports.Empresa = Empresa;
class Udemy extends Empresa {
    constructor() {
        super('Udemy', '22.222.222/0002-22');
    }
    popColaborador() {
        const colaborador = this.colaboradores.pop();
        if (colaborador) {
            return colaborador;
        }
        else {
            return null;
        }
    }
}
exports.Udemy = Udemy;
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
console.log("Nome: " + empresa1.getNome());
const u1 = new Udemy();
console.log(u1);
const colaborador4 = new Colaborador('Cacete', 'de agulha');
const colaborador5 = new Colaborador('Não', 'nada a ver');
const colaborador6 = new Colaborador('Irineu', 'você não sabe e nem eu');
u1.adicionaColaborador(colaborador4);
u1.adicionaColaborador(colaborador5);
u1.adicionaColaborador(colaborador6);
console.log(u1);
