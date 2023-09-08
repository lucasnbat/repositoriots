/*eslint-disable*/

//Module-mode
export default 1;

//Testes aula
let x = 10;
x = 0b1010;
// x = 'Luiz'; se você descomentar vai ver o TS reclamando que nao pode botar string em algo que ja recebeu number

//tipo literal: aqui y é um subtipo de number, ele é 10 e não é alteravel nunca. É usado com const
const y = 10;

//se voce fosse teimar em fazer isso com let, seria (não aconselhável fazer isso):
let z: 100 = 100;

//outra forma melhor para criar a mesma coisa
let u = 10 as const;

//veja como podemos usar as const nos objetos para evitar que alguns sejam alterados:
const pessoa = {
    nome: 'Lisa' as const,
    sobrenome: 'Lindona'
}

// pessoa.nome = ''; se você descomentar, apagar as aspas e tentar abrir de novo, vai ver que o valor sugerido para a chave nome só será 'Lisa'

//agora vamos criar uma função de escolher cor onde eu passarei os TIPOS que ela pode ser
function escolhaCorTipoLiteral(cor: 'Amarelo' | 'Azul' | 'Rosa') { //isso aqui não é valores, são TIPOS literais possíveis para a variavel cor
    return cor;
}

console.log(escolhaCorTipoLiteral('Amarelo'));

//sempre use o const para criar tipos literais, se não puder, use let as const

