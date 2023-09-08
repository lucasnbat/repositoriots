/*eslint-disable*/
/**
 * veja abaixo que eu tipei da seguinte forma:
 * No objetoTeste, eu coloquei os nomes das chaves e o tipo de valor que elas esperam;
 * Caso eu não saiba o nome das próximas chaves que quero colocar (algo comum) eu vou usar:
  * [key: string] : unknown
  * Dessa forma, digo: tenho uma chave hipotética que TEM QUE SER formato string (chaveD, chaveX...) e vai receber um valor que não sei qual será;
  * Os elementos que forem entrando por meio desse key:string não serão listados ao fazer "objetoTeste."
  * Isso que usamos é um "index signature"
 * Veja outra coisa: usei readonly no chaveA: isso significa que ele não pode ser modificado depois que declarei o valor dele no objeto HIHIHI
 */
const objetoTeste: { readonly chaveA: string; chaveB: string; chaveC?: string;[key: string]: unknown } = {
  chaveA: 'Valor A',
  chaveB: 'Valor B'
}

console.log(objetoTeste);
objetoTeste.chaveD = 'RECEBAAA LILILI';
console.log(objetoTeste);

