/*eslint-disable*/

/**
 * Generics significa fazer funções e tipos de dados mais genéricos possíveis;
 * É tipo o que fizemos em JS quando criamos nosso próprio reduce;
 */

//aqui está como fazer um type receber um tipo automaticamente
type FilterCallback<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean;

/*O <T> faz inferir o tipo automaticamente, o qual também será o tipo do array de recebimento e o de retorno*/
/*Preciso inclusive colocar o T no FilterCalback para informar ao meu type que tipo foi detectado e estou trabalhando */
export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vetorFiltradoOriginal = vetor.filter((value) => value < 5);
console.log(vetorFiltradoOriginal);

const vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const vetorFiltradoNovo = meuFilter(vetor2, (value) => value < 5);

console.log(vetorFiltradoNovo);
