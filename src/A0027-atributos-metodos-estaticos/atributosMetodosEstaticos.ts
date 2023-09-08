/*eslint-disable*/

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(private nome: string, private _sobrenome: string, private idade: number, private cpf: string) { }

  static falaOi() {
    console.log('Oi, bixano!!');
  }

  //padrao projeto FactoryMethod
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  //para acessar atributos static em metodos normais, você não consegue fazer atraves de this, apenas se colocar Pessoa.nomeDoAtributo
  public metodoNormal() : void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Winy', 'Zanin', 23, '000111222-22'); //acho que isso só é permitido porque o constructor não é static
console.log(pessoa1);
pessoa1.metodoNormal();
Pessoa.falaOi(); // => em metodos static só consigo acessar eles por meio da classe principal
const pessoa2 = Pessoa.criaPessoa('Lucas', 'Nunes');
console.log(pessoa2);
console.log(Pessoa.cpfPadrao, Pessoa.idadePadrao);

