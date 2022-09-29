function leerNumeroPositivo(mensaje) {
  let numero = parseFloat(prompt(mensaje));
  while (numero <= 0) {
    numero = parseFloat(prompt(`ERROR. ${mensaje}`));
  }
  return numero;
}

// PROGRAMA PRINCIPAL
let cantEstaturas;
let estatura;
let acuEstaturas = 0;
let promedio;

cantEstaturas = leerNumeroPositivo("¿Cuántas estaturas va a cargar?");

for (let i = 1; i <= cantEstaturas; i++) {
  estatura = leerNumeroPositivo(`Ingrese la estatura #${i}`);
  acuEstaturas = acuEstaturas + estatura;
}

promedio = acuEstaturas / cantEstaturas;
console.log(`El promedio es ${promedio} m.`);
