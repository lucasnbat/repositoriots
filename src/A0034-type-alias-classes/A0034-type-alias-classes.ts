/*eslint-disable*/
export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string; //atributo que é uma função e que é do tipo função retornadora de string
}

export class Pessoa extends TipoPessoa {

  //veja que a classe concreta pode ter tipos de atributo diferentes da classe abstrata pessoa -> só não pode fechar mais (no caso, usar private nos atributos)
  constructor(public nome: string, public sobrenome: string) {
    super(); //basicamente TS exige pq a classe abstrata PODE ter construtor, então aqui nessa linha vc garante a invocação dele
  };

  public nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  };
}

const p1 = new Pessoa('Aline', 'Bahouse');
console.log(p1.nomeCompleto());
