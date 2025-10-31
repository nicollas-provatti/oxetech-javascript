// Selecionando (getElementById)
const titulo = document.getElementById("titulo");
console.log(titulo);

const paragrafo = document.getElementById("paragrafo");
console.log(paragrafo);

// Manipulação (innerText e innerHTML)
const tituloTexto = titulo.textContent;
console.log(tituloTexto);
titulo.textContent = "DOM (Document Object Model)";

const paragrafoTexto = paragrafo.innerHTML;
console.log(paragrafoTexto);
paragrafo.innerHTML = "Lorem ipsum dolor <strong>sit amet consectetur adipisicing elit</strong>. Id dolorum similique repudiandae fugiat facere accusamus accusantium dicta harum est vero omnis maiores ipsa tenetur non, officiis voluptatibus officia! Optio, veritatis.";