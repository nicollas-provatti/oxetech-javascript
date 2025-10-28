// espalhar ou copiar
const usuario = {
  nome: "Ana",
  idade: 25,
};
const endereco = {
  cidade: "Maceió",
  estado: "AL",
};

// sem spread
console.log(Object.assign({}, usuario, endereco));

// com spread
const perfil = { ...usuario, ...endereco };
console.log(perfil);

const produto = { nome: "Notebook", preco: 3000 };

// "copia" sem spread
const copia1 = produto;

// cópia com spread
const copia2 = { ...produto };

produto.preco = 3500;

console.log(produto);
console.log(copia1);
console.log(copia2);

// sobrescrevendo propriedades
const obj1 = { a: 5, b: 10 };
const obj2 = { b: 15, c: 20 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3)
