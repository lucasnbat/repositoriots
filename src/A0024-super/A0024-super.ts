/*eslint-disable*/

//Pessoa é super classe
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

//Aluno, cliente são sub-classes que extendem as propriedades da super classe, da mãe
export class Aluno extends Pessoa {
  public salaAluno: string; //crio o atributo unico do filho
  constructor(nome: string, sobrenome: string, idade: number, cpf: string, salaAluno: string) { //aqui eu to recebendo valores e botando numa caixa fazendo analoigia ao construtor da superclasse
    super(nome, sobrenome, idade, cpf);  //aqui eu invoco o construtor orignial da super (o que tem todos os this.atributo = atributo, mas que no caso, es~tao escondidos pq usei o atalho do TS para criar classe)
    this.salaAluno = salaAluno; //e aqui eu complemento o construtor original com o novo atributo do aluno
  };
  public getNomeCompleto(): string {
    console.log('[Exemplo de qualquer procedimento feito no metodo do filho e que quero fazer antes do metodo original do pai (classe super)]');
    return super.getNomeCompleto(); //aqui eu poderia colocar os argumentos normalmente
  }
};

//outra forma de usar super é botar numa const e retornar ela
export class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    console.log("Fazendo qualquer coisa");
    const result = super.getNomeCompleto();
    return result + " [VEJA QUE POSSO ATÉ ALTERAR O RESULT]";
  }
};



const p2 = new Aluno('Julia', 'Bordignon', 21, 'lilil', '123');
const p3 = new Cliente('João', 'Bordignon', 21, 'lilil');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p1.getNomeCompleto());
console.log(p2.getNomeCompleto());
console.log(p3.getNomeCompleto());
console.log(p2);
