/*eslint-disable*/

/*
export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string; //atributo que é uma função e que é do tipo função retornadora de string
}
*/

//usando tipos (type alias)
type TipoNome = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
}

type TipoNomeCompleto = {
  nomeCompleto: () => string; //atributo que é uma função e que é do tipo função retornadora de string
}

//implementando o tipo numa nova classe
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {

  //veja que a classe concreta pode ter tipos de atributo diferentes da classe abstrata pessoa -> só não pode fechar mais (no caso, usar private nos atributos)
  constructor(public nome: string, public sobrenome: string) { }; //aqui tá public porque os atributos são public no tipo

  public nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  };
}

const p1 = new Pessoa('Aline', 'Bahouse');
console.log(p1.nomeCompleto());
