/*eslint-disable*/
/**
 * Quando pode ser qualquer tipo, no caso, não houve inferencia do TS sobre qual tipo você tá querendo trabalhar
 */

function showMessage(msg: any) { //pode receber qualquer coisa
  return msg;
}

console.log(showMessage([1, 2, 3]));
//se eu tirar o --transpile-only do settings.json, ele vai gerar erro na execução pois o tsconfig tá com strict: true
//isso faz o console ficar mais exigente e fazer mais restrições
