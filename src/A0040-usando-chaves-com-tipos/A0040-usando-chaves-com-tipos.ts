/*eslint-disable*/

type Veiculo = {
  marca: string;
  ano: string;
};

type Car = {
  brand: Veiculo['marca']; //espelha o tipo que a chave 'marca' tem no tipo Veiculo
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: '2020',
  name: 'Fiesta',
};

console.log(carro);

