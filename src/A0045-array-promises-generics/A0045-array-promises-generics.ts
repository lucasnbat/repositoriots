/*eslint-disable*/
export const vetor: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(vetor);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
minhaPromise().then((result) => console.log(result + 1));

/*
 * Promises:
   * É objeto representante de operação que é assincrona;
   * Operação assíncrona: que demora um tempo para concluir;
   * 3 estados: pendente, concluída, rejeitada;
   * Quando promise é concluída, ela gera um valor que pode ser usado e manipulado;
   * Quando promise é rejeitada, ela gera um erro que pode ser usado e manipulado;
   * Para fazer essas manipulações, usamos funções inseridas dentro de APIs como a
     fetch, que é uma API que faz requisições HTTP;
 */
