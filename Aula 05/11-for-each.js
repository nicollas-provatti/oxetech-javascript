const numeros = [10, 20, 30, 40, 50];

// sem forEach
function dobrar(numero) {
  return numero * 2;
}

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = dobrar(numeros[i]);
}

console.log(numeros);


// forEach(): chama uma função de callback para cada elemento

// callback: função que será aplicada a cada elemento
  // value: valor atual
  // index: índice atual
  // array: todo o array
  
numeros.forEach(callback);

function callback(value, index) {
  console.log(`[${index}]: ${value}`);
}

numeros.forEach((value, index) => {
  console.log(`[${index}]: ${value}`);
});
