/*
    7) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores de baloncesto (en metros). La computadora debe mostrar la estatura promedio.
 */

/*
do { // 1..N
    cant = parseInt(prompt("¿Cuántas estaturas va a ingresar?"));
} while(cant <= 0);
*/

const ESTATURA_MAX = 2.7;

let estatura;
let promedio;
let sumEstaturas = 0;

let cant = parseInt(prompt("¿Cuántas estaturas va a ingresar?"));
while (cant <= 0) {
  // 0..N
  cant = parseInt(prompt("ERROR. ¿Cuántas estaturas va a ingresar?"));
}

for (let i = 1; i <= cant; i++) {
  estatura = parseFloat(prompt(`Ingrese la estatura ${i}`));
  while (estatura <= 0) {
    estatura = parseFloat(prompt(`ERROR. Ingrese la estatura ${i}`));
  }
  sumEstaturas = sumEstaturas + estatura;
}

promedio = sumEstaturas / cant;
console.log(`La estatura promedio es ${promedio} m.`);

//while (estatura <= 0 || estatura > ESTATURA_MAX)
