let nome;
let idade;
let email;

// Declaração
const cliente = {
  nome: "Nicollas",
  idade: 23,
  email: "npg@ic.ufal.br"
}

console.log(cliente);

// Modificação e Acesso
cliente.nome = "Nicollas Provatti";
cliente.altura = 1.85;

console.log(`Altura: ${cliente.altura}`);
console.log(cliente);