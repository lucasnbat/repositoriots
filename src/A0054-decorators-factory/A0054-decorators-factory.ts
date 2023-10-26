/*eslint-disable*/

interface Constructor {
  new(...args: any[]): any;
}
//essa é uma decorator factory, uma função que recebe o decorador e faz coisas com ele usando parmetros que ela recebeu
function inverteNomeECor(param1: string, param2: string) {
  //aqui temos a função decoradora (TEM QUE TER O RETURN DE UMA FUNÇÃO DESSAS)
  return function (target: Constructor) {
    console.log('Olá, eu sou um decorator, recebi: ', target);
    //aqui temos a classe anônima retornada pelo decorador
    return class extends target {
      //mesmo que a classe original já tenha name e color, to adicionando aqui
      //para eu poder implementar ou criar comportamentos diferentes com eles
      name: string;
      color: string;

      constructor(...args: any[]) {
        super(...args); //inicializa atributos padrão da classe
        this.color = this.inverte(args[0]); //invertendo cor
        this.name = this.inverte(args[1]); //invertendo nome
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2;
      }
    };
  }
}

const animal = new Animal('amarelo', 'camaleão');
console.log(animal);

/*
decorator isolado
function outroDecorador(target: Constructor) { //recebendo classe tipo especificado no Constructor
  console.log('Sou outro decorador');
  return target;
}
*/

function outroDecorador(param1: string) {
  return function (target: Constructor) { //recebendo classe tipo especificado no Constructor
    console.log('Sou outro decorador' + ' ' + param1);
    return target;
  }
}

@outroDecorador('Meu nome é Cláudio')
@inverteNomeECor('ola', 'valor2') //aqui estão os parametros passados para a factory decorator
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe!');
  }
}




