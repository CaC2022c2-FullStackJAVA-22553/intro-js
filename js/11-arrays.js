// DEFINICIONES DE FUNCIONES

function mostrarArray(elArray) {
  for (let i = 0; i < elArray.length; i++) {
    console.log(`[${i}]: ${elArray[i]}`);
  }
}

function leerNumeroPositivo(mensaje) {
  let numero = parseFloat(prompt(mensaje));
  while (numero <= 0) {
    numero = parseFloat(prompt(`ERROR. ${mensaje}`));
  }
  return numero;
}

function cargarArrayConNumerosPositivos(elArray, mensaje) {
    for (let i = 0; i < elArray.length; i++) {
        elArray[i] = leerNumeroPositivo(`${mensaje} nº ${i+1}`);
    }
}

function calcPromedio(elArrayDeNumeros) {
    return sumarValoresArray(elArrayDeNumeros) / elArrayDeNumeros.length;
}

function sumarValoresArray(elArrayDeNumeros) {
    let acu = 0;
    for (let i = 0; i < elArrayDeNumeros.length; i++) {
        acu = acu + elArrayDeNumeros[i];
    }
    return acu;
}

function mostrarValoresQueSuperenA(valorASuperar, elArrayDeNumeros) {
    for (let i = 0; i < elArrayDeNumeros.length; i++) {
        let valor = elArrayDeNumeros[i];
        if(valor > valorASuperar) {
            console.log(valor);
        }
    }
}
///////////////////////////////////////////////////////////////////////////////
/**
 * El usuario ingresa cuántas edades quiera cargar. Luego las carga. La PC debe mostrar las edades que han superado el promedio.
 */

let cant = leerNumeroPositivo("¿Cuántas edades vas a cargar?");
let edades = new Array(cant);
let acu = 0;
let prom;

cargarArrayConNumerosPositivos(edades, "Ingresá la edad");
prom = calcPromedio(edades);
mostrarValoresQueSuperenA(prom, edades);