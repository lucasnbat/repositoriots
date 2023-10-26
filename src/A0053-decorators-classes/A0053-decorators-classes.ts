/*eslint-disable*/

//decorator: serve para você adicionar uma funcionalidade a mais na classe
//sem alterar ela diretamente

//veja que para retornar uma classe anonima eu preciso TIPAR o construtor no <T>
//Tipagem construtor: T extends new (...args: any) => any
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Olá, eu sou um decorator, recebi: ', target);
  //console.log('Assim como essa mensagem, posso fazer novas operações antes de instanciar seu objeto')
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.color = this.inverte(args[0]); //invertendo cor
      this.name = this.inverte(args[1]); //invertendo nome
    }

    inverte(valor: string): string{
      return valor.split('').reverse().join('');
    }
  };
}

@inverteNomeECor //isso fala para classe animal passar pelo meu decorator
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('Sou a classe!');
  }
}

//isso abaixo equivale a AnimalDecorated = Animal
//const AnimalDecorated = decorator(Animal);

//logo, posso simplesmente instanciar AnimalDecorated

//const animalRisosRisos = new AnimalDecorated('azul', 'baleia');
//console.log(animalRisosRisos);

const animal = new Animal('amarelo','camaleão');
console.log(animal);


