let nome;
let idade;
let altura;
let programador;

nome = prompt("Qual o seu nome ?");
/* idade = prompt("Qual sua idade ?");
altura = prompt("Qual sua altura ?");
programador = prompt("Você é programador ?"); */

alert("Nome: " + nome);
/* alert("Idade: " + idade);
alert("Altura: " + altura);
alert("Programador: " + programador);
 */
alert("Nome: " + nome + 
  "\nIdade: " + idade + 
  "\nAltura: " + altura + 
  "\nProgramador: " + programador
)

alert(`Nome: ${nome}
  Idade: ${idade}`)

let resposta = confirm("Os seus estão corretos ?");