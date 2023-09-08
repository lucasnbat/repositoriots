/*eslint-disable*/

//----------------------------------------------------------------------------------------------------------------------

/*Recomendado*/

const constBody = document.querySelector('body')

//concidicional
//se você não checcar com o if se o constBody existe, vai passar a possibilidade do body voltar nulo e dar problema. TS vai reclamar, então, coloque o IF validando
if (constBody) {
  constBody.style.background = 'red';
}

//Type assertion (basicamente colocar "as + nomeDoElementoQueTenhoCertezaQueNaoVaiSerNulo")
const constBody3 = document.querySelector('body') as HTMLBodyElement;
constBody3.style.background = 'red';

//mais um exemplo de Type assertion
const constInput = document.querySelector('.input') as HTMLInputElement;
constInput.value = 'Qualquer input aqui';
constInput.focus();

//----------------------------------------------------------------------------------------------------------------------

/*Não recomendado*/

//non-null assertion (!)
//para inserir uma observação que o body não vai ser nulo e que vc tem certeza que ele existe, coloque ! no final do comando. Assim, o TS não reclama
const constBody2 = document.querySelector('body')!;
constBody2.style.background = 'red';

const constBody4 = document.querySelector('body') as unknown as number;

/**
 * E veja que sempre uso o "as" com um tipo que TEM A VER com meu comando. Se meu comando é relativo a document e query selector de HTML, meu subtipo ali vai ser um HTMLBodyElement, HTMLInputElement...
 * Se você precisar memso converter, sla, para numero, aí uso "as unknown as number" para converter.
 */
