/*eslint-disable*/

//allowJs tem que estar true no tsconfig.json
import { soma } from './modulo';

const result = soma(10, 20);
console.log(result);

/**
 * Acima você terá problemas com tipagem...mas tem 2 opções:
 * Você usa type caching: colocar "as number" no final da chamada de função;
 * Ou você cria um arquivo de declaração de tipo para o arquivo que você está importando.
    * Ou seja, copia o modulo.js, cola, troca a extensão para ts e adapta o código para ts e importa de novo
 */
