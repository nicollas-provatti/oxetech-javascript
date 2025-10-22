// É uma função anônima que traz uma sintaxe mais curta e simples.
const multiplicar = (a, b) => {
  return a * b;
}

console.log("Multiplicação: " + multiplicar(10, 2));

const dividir = (a, b) =>  a / b // retorno implícito

console.log("Divisão: " + dividir(10, 2));

const dobrar = a => a * 2;

console.log("Dobro: " + dobrar(10));

// this