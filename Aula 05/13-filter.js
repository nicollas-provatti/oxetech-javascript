// filter(): chama uma função de callback para cada elemento e retorna um novo array com os elementos que passaram no teste.
const numeros = [1, 4, 9, 16, 12];

function isPar(numero) {
  return numero % 2 === 0;
}

const numerosPares = numeros.filter(isPar);
console.log("Original:", numeros);
console.log("Pares:", numerosPares, "\n");

const numerosImpares = numeros.filter((numero) => {
  if (numero % 2 !== 0) {
    return numero;
  }
});
console.log("Original:", numeros);
console.log("Ímpares:", numerosImpares);

