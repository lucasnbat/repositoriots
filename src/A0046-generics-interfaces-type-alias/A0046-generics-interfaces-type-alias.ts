/*eslint-disable*/

/**********PROTOCOLOS************/
interface PessoaProtocolo<T, U> {
  nome: T;
  sobrenome: T;
  idade: U;
}

interface PessoaProtocolo2<V = string, X = number> {
  nome: V;
  sobrenome: V;
  idade: X;
}

/**********TESTES************/
//posso especificar diferentes tipos para cada caso
//porque to usando GENERICS
const aluno: PessoaProtocolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
}

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
}

//veja que aqui não precisei especificar ao instanciar
//por que eu já padronizei o tipo padrão lá no PessoaProtocolo2
const aluno3: PessoaProtocolo2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
}
