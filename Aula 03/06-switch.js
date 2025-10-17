let produtoEscolhido = 1;

switch (produtoEscolhido) {
  case 1: 
    console.log("Produto 1 removido!");
    break;
  case 2:
    console.log("Produto 2 removido!");
    break;
  case 3:
    console.log("Produto 3 removido!");
    break;
  case 4:
    console.log("Produto 4 removido!");
    break;
  case 5:
    console.log("Produto 5 removido!");
    break;
  default:
    console.log("Produto não encontrado!");
    break;
}

let filtroEscolhido = "eletrônicos";

switch (filtroEscolhido) {
  case "eletrônicos": 
    console.log("Listando os eletrônicos.");
    break;
  case "roupas":
    console.log("Listando as roupas.");
    break;
  case "papelaria":
    console.log("Listando os itens de papelaria.");
    break;
  default:
    console.log("Filtro não encontrado!");
    break;
}