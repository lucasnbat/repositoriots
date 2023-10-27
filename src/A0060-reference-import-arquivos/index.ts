/*eslint-disable*/

/// <reference path="modulo/module.ts"/>

//comando para gerar um index.js com o código e usar para importar
//npx tsc .\src\A0060-reference-import-arquivos\index.ts --outFile .\src\A0060-reference-import-arquivos\index.js

//depois vai no js gerado e roda ele

//para rodar compilando esse index.ts com ctrl + alt + n vai precisar ir no tsconfig.json e colocar "module": "amd",
console.log(MeuNamespace.nomeDoNamespace);

