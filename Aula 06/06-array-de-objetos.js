const produtos = [
  {
    id: 1,
    nome: "Café",
    preco: 9.9,
    categoria: "Bebidas",
    emEstoque: true,
    estoque: 25,
  },
  {
    id: 2,
    nome: "Leite",
    preco: 5.5,
    categoria: "Bebidas",
    emEstoque: true,
    estoque: 40,
  },
  {
    id: 3,
    nome: "Pão",
    preco: 7.0,
    categoria: "Padaria",
    emEstoque: false,
    estoque: 0,
  },
  {
    id: 4,
    nome: "Queijo",
    preco: 22.9,
    categoria: "Frios",
    emEstoque: true,
    estoque: 12,
  },
  {
    id: 5,
    nome: "Bolo de Chocolate",
    preco: 15.0,
    categoria: "Padaria",
    emEstoque: false,
    estoque: 0,
  },
];

// 1. Listar apenas nomes e preços
produtos.forEach((produto) =>
  console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`)
);

// 2. Criar um array com os nomes
const nomes = produtos.map((produto) => produto.nome);
console.log(nomes);

// 3. Filtrar produtos em estoque
const disponiveis = produtos.filter((produto) => produto.emEstoque);
console.log(disponiveis);

// 4. Calcular o preço total de todos os produtos
const total = produtos.reduce(
  (soma, produto) => soma + produto.preco * produto.estoque,
  0
);
console.log(total);

// 5. Encontrar um produto específico
const produto = produtos.find((produto) => produto.nome == "Café");
console.log(produto);
