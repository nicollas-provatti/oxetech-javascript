const numeros = [4, 7, 6, 9, 12, 1, 0];

// start: índice inicial (contido)
// end: índice final (não contido)
// retorno: subarray 

// NÃO altera o array original

const subArray = numeros.slice(3, 6);

console.log("Array depois do slice: ", numeros);
console.log("Subarray obtido: ", subArray);

