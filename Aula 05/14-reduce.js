// reduce(): reduz um array a um único valor, aplicando uma função acumuladora a cada elemento do array.
const numeros = [1, 2, 3, 4, 5];

function somar(acumulador, atual, index) {
  console.log(`Índice: ${index} = Acumulador: ${acumulador}, Atual: ${atual}`);
  return acumulador + atual;
}

const soma = numeros.reduce(somar, 0);
console.log("Soma:", soma, "\n");

