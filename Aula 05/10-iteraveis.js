const numeros = [10, 20, 30, 40, 50];

// for padrão
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// for...of: iterando valores
for (let numero of numeros) {
  console.log(numero);
}

// for...in: iterando índices
for (let indice in numeros) {
  console.log(`[${indice}] = ${numeros[indice]}`);
}
