let numero = 1;
let sumaPares = 0;

while (numero <= 100) {
  if (numero % 2 === 0) {
    sumaPares += numero;
  }
  numero++;
}

console.log(sumaPares); 