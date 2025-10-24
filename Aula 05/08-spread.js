// spread: É usado para espalhar/expandir 
// os elementos de um array.

const alunos = ["lucas", "carlos"];
const maisAlunos = ["pedro", "josé"];

// sem spread
const turma1 = alunos.concat(maisAlunos);

// com spread
const turma2 = [...alunos, ...maisAlunos];

console.log(turma1);
console.log(turma2);

// Pode ser usado para criar cópias independentes
const numeros = [1, 2, 3];

// cópia sem spread
const copia1 = numeros;
copia1[0] = 0;

// cópia com spread
const copia2 = [...numeros];
copia2[0] = 1;

console.log("Array original: ", numeros);