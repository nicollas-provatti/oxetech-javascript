// extrai propriedades
const usuario = {
  nome: "Ana",
  idade: 25,
  cidade: "Maceió",
};

// sem destructuring
let nomeUsuario = usuario.nome;

console.log(nomeUsuario);

// com destructuring
const { nome, idade:idadeUsario, cidade = "desconhecida" } = usuario;

console.log(nome);
console.log(idadeUsario);
console.log(cidade)