// Old
function multiplicar1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;

  return a * b * c;
}

console.log(multiplicar1(2, 3, 4));
console.log(multiplicar1(2, 3));
console.log(multiplicar1(0, 0, 0));

function multiplicar2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = isNaN(b) ? 1 : b;
  c = isNaN(c) ? 1: c;

  return a * b * c;
}

console.log(multiplicar2(2, 3, 4));
console.log(multiplicar2(2, 3));
console.log(multiplicar2(0, 0, 0));

// New
function multiplicar3(a = 1, b = 1, c = 1) {
  return a * b * c;
}

console.log(multiplicar3(2, 3, 4));
console.log(multiplicar3(2, 3));
console.log(multiplicar3(0, 0, 0));
