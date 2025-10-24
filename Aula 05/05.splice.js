const numeros = [4, 7, 6, 9, 12, 1, 0];

// start: índice inicial
// deleteCount: quantidade de números deletados
// number[]: números adicionados
// retorno: elementos removidos

numeros.splice(3, 0, 1, 2, 3); // Adicionando  [4, 7, 6, 1, 2, 3, 9, 12, 1, 0]
numeros.splice(3, 3) // Removendo  [4, 7, 6, 9, 12, 1, 0]
numeros.splice(0, 3, 1, 2, 3) // Adição e remoção [1, 2, 3, 9, 12, 1, 0]

console.log("Array depois do splice: ", numeros);
