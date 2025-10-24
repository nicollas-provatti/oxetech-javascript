// é dinâmico
const alunos = ["Bia", "Carlos", "Ana"];
console.log(alunos);
alunos[3] = "Jorge";
console.log(alunos);

// pode conter buracos
alunos[6] = "Maria";
console.log(alunos);

// pode conter valores variados
const valores = [1, 1.7, "olá", true, undefined, null, [], {}, () => "olá"];
