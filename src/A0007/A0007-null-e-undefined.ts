/*eslint-disable*/
let x; //any (mouse em cima)
if (typeof x === 'undefined') {
  x = 20;
}
console.log(x * 2);

//parametros opcionais como o lastName sempre podem ter valor ou ter o valor undefined]
//sempre que você usar o '?:' vc vai ter que ficar atento se a chave exisite no objeto retornado pela função

export function createPerson(firstName: string, lastName?: string): {
  firstName: string; //isso aqui é o tipo, veja que usei : e depoooois abri {} com esses dois atributos indicando que o RETORNO seram eles tambem
  lastName?: string;
} { //abrindo chave da função
  return {  //indicando que essa função retorna um objeto com firstname e lastname
    firstName,
    lastName
  }
}

//retornando null é algo que dev pode fazer mais facilmente
export function squareOf(x: any) {
  if (typeof x === 'number') {
    return x * x; //ou retornar number
  } else {
    return null; //ou retorna um null
  }
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (typeof squareOfTwoNumber === null) {
  console.log('Resultado da operação null!')
} else {
  console.log(squareOfTwoNumber); //mostra o valor
}
