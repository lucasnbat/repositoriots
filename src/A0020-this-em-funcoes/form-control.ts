/*eslint-disable*/
//importando validação de senha
import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message'; //mesmo nome da classe css que estiliza a msg de erro

//usamos ponto nos nomes porque eles são CLASSES
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

//agora estou usando arrow function
//o escopo da arrow function faz o escopo do this vai ser o escopo global (ele captura o valor do this global)

/**
 * Veja que a função só é CRIADA na linha 20 (contexto do this global), mas nao usamos o this. usamos uma variavel para setar
 * o target do evento (form) numa varivael (tambem chamada target) para que eu não tenha problemas com this
 */
const submitEventFn = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLFormElement; //aqui significa que o evento submit tem como target/alvo o formulario
  hideErrorMessages(target);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) console.log('Formulário enviado');
}

form.addEventListener('submit', submitEventFn);

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'As senhas não batem!');
    showErrorMessage(password2, 'As senhas não batem!');
  }
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido!!');
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach(input => {
    if (!input.value) showErrorMessage(input, "Este campo não pode ficar vazio, zenhor!");
  })
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
};

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  //ele vai pegar todos os elementos que tem a classe show error messages e vai rodar uma função para cada um deles
  //se ele achar algum elemento com essa classe, ele vai setar a variavel send para false
  //se ele não achar nenhum elemento com essa classe, ele vai deixar a variavel send como true
  //ou seja, se ele achar algum elemento com a classe show error messages, ele não vai enviar o formulário
  //se ele não achar nenhum elemento com a classe show error messages, ele vai enviar o formulário
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false));
  return send;//retorna send que é o resultado (true ou false)
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  //ele faz uma query em todas as divs com a classe formfield e vai usar/manipular elas como HTMLDivElements
  const formFields = input.parentElement as HTMLDivElement; //filtrando o elemento pai do input. O input é o campo lá em si, e o elemento pai é o primeiro que engloba ele, no caso, a div form fiedls
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement; //filtrando as mensagens de erro das divs
  errorMessage.innerText = msg; //ele vai pegar o texto interno da classe error message e substituir pelo texto que coloquei na variavel msg
  /**
   * classList é uma propriedade de elementos HTML que permite acessar e manipular as classes CSS associadas a um elemento.
   * Ela fornece métodos para adicionar, remover, verificar a presença e alternar classes em um elemento específico.
   */
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

showErrorMessage(username, 'MENSAGEM QUALQUER')
hideErrorMessages(form);
