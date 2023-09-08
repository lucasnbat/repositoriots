/*eslint-disable*/

//ALUNO "É UMA" PESSOA
//CLIENTE "É UMA" PESSOA --> relação É UM
export class Pessoa {
  constructor(public nome: string, public sobrenome: string, public idade: number, protected cpf: string) { };

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `Meu nome é ${this.nome} ${this.sobrenome}`;
  }
}

const p1 = new Pessoa('Lucas', 'Alves', 21, 'lilil'); //tipo calasse pessoa
console.log(p1.getNomeCompleto());

//"Ah mas eu quero que getNomeCompleto() seja diferente em aluno e cliente" --> reescreva (sobrescreva) o método dentro das classes filhas!!
export class Aluno extends Pessoa {
  public getNomeCompleto(): string {
    return `Aluno: Meu nome é ${this.nome} ${this.sobrenome}`;
  }
};

export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return `Cliente: Meu nome é ${this.nome} ${this.sobrenome}`;
  }
};



const p2 = new Aluno('Julia', 'Bordignon', 21, 'lilil');
const p3 = new Cliente('João', 'Bordignon', 21, 'lilil');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p1.getNomeCompleto());
console.log(p2.getNomeCompleto());
console.log(p3.getNomeCompleto());
