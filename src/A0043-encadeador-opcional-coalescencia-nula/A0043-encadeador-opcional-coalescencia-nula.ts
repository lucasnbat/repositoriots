/*eslint-disable*/

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

//encadeador opcional = ?. => ele pergunta se existe o data no documento
//evita quebrar o programa
// console.log(documento.data?.toDateString())

//não valor: null e undefined
//operador de coalescencia nula = ele verifica a condição da esquerda e, se for não-valor, retorna o que tem na direita
console.log(documento.data?.toDateString() ?? 'Ixi, não existe data.');
console.log(0 ?? '2 - Ixi, não existe data.');
console.log('' ?? '3 - Ixi, não existe data.');
