/*eslint-disable*/
/*eslint-disable @typescript-eslint/no-namespace */

/**
 * JS e TS já tem sistemas de modulos onde você importa e exporta o que precisa
 */

namespace MeuNamespace {
  //console.log('risos?');
  //const constanteTeste = 123;
  export const nomeDoNamespace = 'Luiz';

  //fora do namescpace a classe abaixo não existe
  export class PessoaDoNamespace {
    constructor(public nome: string) { }
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Luiz');
  //console.log(pessoaDoNamespace);
  //essa eu posso usar fora do namespace pois vou exportar ela
  /*
  export class CursosDoNamespace {
    constructor(public nome: string, public cargaHoraria: number) { }

    get number() {
      return this.cargaHoraria;
    }
  }
  */


  //const pessoa = new PessoaDoNamespace('Luiz');
  //console.log(pessoa);

  /*
  const curso = new CursosDoNamespace('JS', 120);
  console.log(curso);
  */
  export namespace OutroNamespace {
    export const nomeDoOutroNamespace = 'Olegario Otavio';
  }

}

/*
const curso2 = new MeuNamespace.CursosDoNamespace('TS', 120);
console.log(curso2);

//teste de get
console.log(curso2.number);

//testando acessar uma constante
//console.log(MeuNamespace.constanteTeste);

//acessando constante de namescpace dentro de outro namespace
console.log(MeuNamespace.OutroNamespace.nomeDoOutroNamespace);
*/
