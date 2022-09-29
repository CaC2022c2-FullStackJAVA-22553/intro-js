let cantEstaturas;
let estatura;
let acuEstaturas = 0;
let promedio;

cantEstaturas = parseInt(prompt("¿Cuántas estaturas va a cargar?"));
while (cantEstaturas <= 0) { // 0..N
  cantEstaturas = parseInt(prompt("ERROR. ¿Cuántas estaturas va a cargar?"));
}

for (let i = 1; i <= cantEstaturas; i++) {
  estatura = parseFloat(prompt(`Ingrese la estatura #${i}`));
  while (estatura <= 0) {
    estatura = parseFloat(prompt(`ERROR. Ingrese la estatura #${i}`));
  }
  acuEstaturas = acuEstaturas + estatura;
}

promedio = acuEstaturas / cantEstaturas;
console.log(`El promedio es ${promedio} m.`);
