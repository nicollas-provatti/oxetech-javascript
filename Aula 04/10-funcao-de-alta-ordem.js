// Funções de alta ordem podem ser passadas como argumentos ou retornadas por outras funções. 

// callback function
function confirmarPagamento(nome, callback) {
  setTimeout(() => callback(nome), 5000);
}

function mensagemDeConfirmacao(nome) {
  console.log(`Olá, ${nome}! O pagamento foi aprovado!`);
}

confirmarPagamento("Nicollas", mensagemDeConfirmacao);


// função que retorna uma função
function calculadora(operacao) {
  switch (operacao) {
    case "sum":
      return function (a, b) { return a + b }
    case "sub":
      return function (a, b) { return a - b }
  }
}

const calcular = calculadora("sum");
console.log(calcular(2, 3));

// factories
// closures
// configuradores
// middleware
// currying/composição