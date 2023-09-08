/*eslint-disable*/
/**
 * Unknowm é um any mais seguro, e vem antes de qualquer tipo no TS
 * Ele é mais seguro porque ele checa o que você tá fazendo e te bloqueia de somar string com numero, por exemplo
 */

let x: unknown;
//se você colocar string + numero e a string é do x (declarado como unknown preimiero) ele vai reclamar e não permitir
x = 100;
x = 300;
const y = 100;
if (typeof x === 'number') console.log(x + y);
