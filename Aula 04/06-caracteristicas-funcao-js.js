function calcularArea(largura, altura) {
  const area = largura * altura;

  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2`);
  } else {
    return area;
  }
}

console.log(calcularArea(2, 3)); // 6
console.log(calcularArea(2)); // NaN
console.log(calcularArea()); // NaN
console.log(calcularArea(2, 3, 4, 5)); // 6
console.log(calcularArea(5, 5)); // undefined