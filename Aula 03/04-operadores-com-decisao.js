let nota = 8.7, faltas = 7;

/* 
Se nota for maior igual 9 e faltas menor que 10: APROVADO COM LOUVOR!
Se nota for maior igual 7 e menor que 9 e faltas menor que 10: APROVADO!
Se nota for maior igual a 4 e menor que 7 e faltas menor que 10: RECUPERAÇÃO
Se nota for maior igual a 0 e menor que 4 ou faltas maior igual a 10: REPROVADO
*/

if (nota >= 9 && faltas < 10) {
  console.log("APROVADO COM LOUVOR!");
} else if (nota >= 7 && nota < 9 && faltas < 10) {
  console.log("APROVADO!");
} else if (nota >= 4 && nota < 7 && faltas < 10) {
  console.log("RECUPERAÇÃO!");
} else if (nota >= 0 && nota < 4 || faltas >= 10) {
  console.log("REPROVADO");
} else {
  console.log("Nota Inválida!");
}