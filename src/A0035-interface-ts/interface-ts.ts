/*eslint-disable*/

/**
 * Type alias e interfaces são praticamente a mesma coisa, mas type alias permite você criar tipos mais simples;
 * Ex tipos mais simples: type TipoTeste = number | string;
 * Interfaces é mais usado para modelar objetos na POO;
 */


interface TipoNome {
  nome: string;
};

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto(): string;
}

//extendendo outras interfaces
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {

}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(public nome: string, public sobrenome: string) { };

  public nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  };
}

//outra forma criar objeto com interface

const pessoaObj: TipoPessoa2 = {
  nome: 'Risos',
  sobrenome: 'risos',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
}

const p1 = new Pessoa('Aline', 'Bahouse');
console.log(p1.nomeCompleto());
