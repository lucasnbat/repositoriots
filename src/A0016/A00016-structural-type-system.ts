/*eslint-disable*/
//o principal dos tipos é as RESTRIÇÕES deles

//user vai ser os dados da base de dados e sentValue serão os dados enviados pelo cliente para bater com os dados da base e liberar o acesso

//criando os tipos para a funçao que vou criar e para o objeto User que será manipulado dentro dela
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string };

//funcao criada e armazena em constante
const verifyuser: VerifyUserFn = (user, sentValue) => {
    return (user.username === sentValue.username && user.password === sentValue.password);

};

//criando usuário do banco de dados e usuário que foi enviado pelo cliente
//veja que o TS infere quais são os tipos das duas constantes abaixo
//ele infere sem eu precisar colocar ": User" pois basta que o CONTEUDO bata com o conteudo do tipo User (username e password)
const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456' };

//verificando se são iguais para permitir ou não o login
const loggedIn = verifyuser(bdUser, sentUser);
console.log(loggedIn);
