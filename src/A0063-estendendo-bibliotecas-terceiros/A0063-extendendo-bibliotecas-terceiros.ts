/*eslint-disable*/

/**
 * Criamos um module2.ts e lançamos as bibliotecas la
 * Depois cliamos o meuDeclarationFile.d.ts, onde declararemos as
   tipagens (sempre tudo global) para que o TS identifique o tipo
   de nossa nova função immplementada
 *
 */

import _ from './module2';

const array = [1, 2, 3, 4, 5];

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mul(array));
