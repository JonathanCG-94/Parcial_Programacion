const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinarNumero() {
  rl.question("Adivina el número secreto (entre 1 y 100): ", (respuesta) => {
    const usuario = parseInt(respuesta);

    if (usuario === numeroSecreto) {
      intentos++;
      console.log(`¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos.`);
      rl.close();
    } else if (usuario < numeroSecreto) {
      intentos++;
      console.log("El número secreto es mayor.");
      adivinarNumero();
    } else if (usuario > numeroSecreto) {
      intentos++;
      console.log("El número secreto es menor.");
      adivinarNumero();
    }
  });
}

adivinarNumero();
