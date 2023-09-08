/*eslint-disable*/
//criação de erros ou loops inficnitos, sao casos de funções que nunca irao retornar nada. Isso que é o never
export function criaErro() {
    //é como se não retornasse nada, como se retornasse um void. posso colcocar void como tipo da função de boas
    throw new Error('Erro qualquer LILILI');
}
criaErro();
