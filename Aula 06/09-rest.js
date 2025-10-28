// agrupa
const usuario = {
  nome: "Ana",
  idade: 25,
  cidade: "São Paulo",
  profissao: "Desenvolvedora",
};

const { nome, ...detalhes } = usuario;

console.log(nome);
console.log(detalhes);

// rest em parâmetros de função
function mostrarUsuario({ nome, ...info }) {
  console.log("Nome:", nome);
  console.log("Outras informações:", info);
}

mostrarUsuario({
  nome: "Carlos",
  idade: 30,
  cidade: "Recife",
});
