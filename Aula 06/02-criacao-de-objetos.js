// NEW OBJECT
const carro = new Object();

carro.marca = "Fiat";
carro.ano = 2024;
carro.preco = 50000;

console.log(carro);

// LITERAL {}
const aluno = {
  nome: "Lucas",
  nota: 7.5
};

console.log(aluno);

// CLASS e CONSTRUTOR
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
};

const produto = new Produto("Smartphone", 749.90);

console.log(produto);