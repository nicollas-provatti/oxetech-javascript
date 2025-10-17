let nota = Number(prompt("Digite sua nota: "));
let faltas = Number(prompt("Digite suas faltas: "));

/* 
falsy: undefined, null, NaN, "", 0
truthy: number != 0, " ", [], {}
*/

if (!nota || !faltas) {
  console.log("Você precisa informar sua nota e a quantidade faltas.");
} else {
  if (nota >= 9 && faltas < 10) {
    console.log("APROVADO COM LOUVOR!");
  } else if (nota >= 7 && nota < 9 && faltas < 10) {
    console.log("APROVADO!");
  } else if (nota >= 4 && nota < 7 && faltas < 10) {
    console.log("RECUPERAÇÃO!");
  } else if ((nota >= 0 && nota < 4) || faltas >= 10) {
    console.log("REPROVADO");
  } else {
    console.log("Nota Inválida!");
  }
}
