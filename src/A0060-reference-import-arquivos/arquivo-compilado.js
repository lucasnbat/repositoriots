/*eslint-disable*/
/*eslint-disable @typescript-eslint/no-namespace */
/**
 * JS e TS já tem sistemas de modulos onde você importa e exporta o que precisa
 */
var MeuNamespace;
(function (MeuNamespace) {
    //console.log('risos?');
    //const constanteTeste = 123;
    MeuNamespace.nomeDoNamespace = 'Luiz';
    //fora do namescpace a classe abaixo não existe
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace('Luiz');
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
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoOutroNamespace = 'Olegario Otavio';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
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
/*eslint-disable*/
/// <reference path="modulo/module.ts"/>
//comando para gerar um index.js com o código e usar para importar
//npx tsc .\src\A0060-reference-import-arquivos\index.ts --outFile .\src\A0060-reference-import-arquivos\index.js
//para rodar vai precisar ir no tsconfig.json e colocar "module": "amd",
console.log(MeuNamespace.nomeDoNamespace);
