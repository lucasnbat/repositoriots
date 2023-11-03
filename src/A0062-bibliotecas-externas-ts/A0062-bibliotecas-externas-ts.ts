/*eslint-disable*/

/**
 * No TS se instala BIBLITOECA e TIPAGEM dela;
 * comandos:
 * npm i validator
 * npm i @types/validator -D
 */

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('risos@risos.com'));
console.log(validator.isEmail('risos@risos'));
console.log(_.clone([1, 2, 3, 4, 5]));
