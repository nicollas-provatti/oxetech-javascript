const numeros = [4, 7, 6, 9, 12, 1, 0];

// negativo: a vem antes de b
// positivo: a vem depois de b
// zero: mantêm

numeros.sort((a, b) => a - b); 
console.log("Ordem crescente: ", numeros);

numeros.sort((a, b) => b - a); 
console.log("Ordem decrescente: ", numeros);