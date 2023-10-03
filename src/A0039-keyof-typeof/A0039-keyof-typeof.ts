/*eslint-disable*/

//fomra diferente de criar um tipo indicando um formato já usado de objeto
type CoresObj = typeof constCoresObj; //aqui eu crio um tipo que é igual ao tipo do objeto coresObj
//agora vou extrair as chaves do objeto
type CoresChaves = keyof CoresObj; //extraindo as chaves do objeto CoresObj

const constCoresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
}

//se eu colocasse cor: string ficaria muito abrangente (eu poderia colocar amarelo por ex) e o typescript
function tradutorCores(cor: CoresChaves, cores: CoresObj) { //passando uma cor e uma constante contendo cores no formato do type definido nas primerias linhas
  //o typeof é para pegar o tipo da constante = se eu quiser pegar o tipo de constCoresObj eu uso typeof constCoresObj
  return cores[cor];
}

console.log(tradutorCores('roxo', constCoresObj));

