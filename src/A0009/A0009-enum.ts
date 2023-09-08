/*eslint-disable*/
/*enum não tem em JS só TS
 *usado pra criar cores e enumerar essas cores
 */
enum Cores {
  VERMELHO, //0
  AZUL, //1
  AMARELO //2
}
console.log(Cores);
//invocando posição do vermelho
console.log(Cores.VERMELHO);
//acessando um valor
console.log(Cores[1]);

function escolhaAcor(cor: Cores): void {
  console.log('Teste= ' + Cores[cor]);
}

escolhaAcor(0);

enum Carros {
  MAVERICK = 10,
  PROJTOA = 100,
  NANANA = 200,
  CAMARO = 'lilili',
  ROSA = 201, //so funciona deixar a proxima linha sem numero se o anterior (no caso, rosa) tiver um numero, porque ai para a proxima linha ele so seguira uma sequencia
  PRETO
}
console.log(Carros.MAVERICK);
console.log(Carros[0]); //ele nao avisa, mas da errado (undefined) fazer isso
console.log(Carros[100]);
console.log(Carros.CAMARO);

enum Carros {
  CONTINUACAO = 'Carrãum'
}
console.log(Carros);
