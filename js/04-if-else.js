/*
    El usuario ingresa su edad. La PC le dice si pasa o no al casino.
    Upgrade: Si es menor, decirle cuántos años le faltan para entrar.
    Upgrade: Si se ingresa una edad negativa, informar que no es válido.
*/

let edad;
let difEdad;
const EDAD_MINIMA = 18;

edad = parseInt(prompt("Ingresá tu edad"));
/*
if(edad > 0) {
    if ( edad >= EDAD_MINIMA ) {
        console.log("Sí, podés pasar");
    } else {
        difEdad =  EDAD_MINIMA - edad;
        console.log("No, todavía sos menor de edad");
        //console.log("Te faltan " + difEdad + " años para entrar"); // Sintaxis vieja
        console.log(`Te faltan ${difEdad} años para entrar`); // Sintaxis moderna
    }
    console.log("Adiós");
} else {
    console.log(`${edad} no es una edad válida`);
}
console.log("Finalizó el programa"); // Sale siempre*/

if (edad <= 0) {
    console.log(`${edad} no es una edad válida`);
} else if (edad < EDAD_MINIMA) {
    difEdad = EDAD_MINIMA - edad;
    console.log("No, todavía sos menor de edad");
    console.log(`Te faltan ${difEdad} años para entrar`); // Sintaxis moderna
} else {
    console.log("Sí, podés pasar");
}