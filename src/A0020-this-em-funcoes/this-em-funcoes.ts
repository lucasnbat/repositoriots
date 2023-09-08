/*eslint-disable*/

/**
 *
 * Quando você define o tipo do this, você não está passando argumento para a função.
 * O argumento 1 é o "string1" ali. Então essa função abaixo tem só 1 argumento, não dois.
 */
export function funcao(this: Date, string1: string, age: number): void {
  console.log(this);
  console.log(string1, age);
}
//agora se eu uso o 'call', dá certo. Você precisa de colocar quem é this primeiro para depois colocar o primeiro argumento
funcao.call(new Date, 'RISOS RISOS', 30);
funcao.apply(new Date, ['ARA ARA', 12]); //a unica diferença do apply para call é que os argumentos são passados num array

