// sem retorno e sem parâmetro
function mensagem() {
  console.log("Olá, dev!");
}

// sem retorno e com parâmetro
function mensagemPersonalizada(nome) {
  console.log(`Olá, ${nome}!`);
}

// com retorno e sem parâmetro
function obterAno() {
  return new Date().getFullYear();
}

// com retorno e com parâmetro
function multiplcar(n1, n2) {
  return n1 * n2;
}

mensagem();

mensagemPersonalizada("Bia");

let anoAtual = obterAno();
console.log(`Ano atual: ${anoAtual}`);

let multiplicao = multiplcar(3, 4);
console.log(`Multiplcação: ${multiplicao}`);
