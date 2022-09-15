/*
    Le pedimos al user su nombre y en qué año nació.
    La máquina procesa y muestra un saludo y su
    edad.
*/
let nombreUsuario;
let anioDeNacimiento;
let edad;

// PENDIENTE: 'Hardcodeamos' los datos, ya aprenderemos a leerlos del form
// ENTRADA
nombreUsuario = "Pepe";
anioDeNacimiento = 2000;
anioActual = new Date().getFullYear();

// PROCESO
edad = anioActual - anioDeNacimiento;

// SALIDA(S)
console.log("Hola " + nombreUsuario + "! Tenés " + edad + " años");