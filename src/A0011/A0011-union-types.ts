/*eslint-disable*/

//funcao add
//vou indicar que uma variavel pode receber valor number ou uma string mesmo
function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b; //se a e b forem numeros, retorna soma dos numerais
  //if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a}${b}`
}
console.log(addOrConcat(10, 20))
console.log(addOrConcat('LILILI', 'HUSHUASHUAHUS'));
