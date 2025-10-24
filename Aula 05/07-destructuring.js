// destructuring: permite extrair valores de arrays diretamente em variáveis.

const numeros = [1, 2, 3];

// sem destructuring
let a = numeros[0];
let b = numeros[1];
let c = numeros[2];

// com destructuring
let [n1, n2, n3] = numeros;

console.log(a, b, c);
console.log(n1, n2, n3);