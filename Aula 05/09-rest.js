// rest: permite agrupa valores restantes em um array.

function somar(...numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

let soma = somar(1, 2, 3, 4);
console.log("Soma: ", soma);
