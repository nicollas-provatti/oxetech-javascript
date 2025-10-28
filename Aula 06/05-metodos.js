const produto = {
  nome: "Celular",
  preco: 2000,
  estoque: 50,
};

// preventExtensions()
Object.preventExtensions(produto);

// seal()
Object.seal(produto);

// freeze()
Object.freeze(produto);

console.log(produto);
