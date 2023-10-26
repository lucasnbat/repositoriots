/*eslint-disable*/

//para cada tipo de decorator (classe, método, parâmatro) tem uma assinatura/tipagem diferente....
//decorator de método
function decorator(classPrototype: any, nomeMetodo: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  let valorPropriedade: any;

  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    get: () => 'qualquer coisa',
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }
      valorPropriedade = valor;
    },
  }
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  /*
   * TEm que retornar any, void ou propertydescriptor
   * pode fazer função factor com ele
   */
  @decorator
  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luiz', 'Miranda', 30);
pessoa.sobrenome = 'Otavio';
console.log(pessoa);

//pessoa.metodo = () => 'olaaaaa';
//const metodo = pessoa.metodo('Olá mundo');


