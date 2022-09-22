/*
    Le pedimos al user su nombre y en qué año nació.
    La máquina procesa y muestra un saludo y su
    edad.
*/
function procesar(e) {
    e.preventDefault();
    let nombreUsuario;
    let anioDeNacimiento;
    let edad;

    // ENTRADA
    nombreUsuario = document.getElementById("inputNombre").value;
    anioDeNacimiento = document.getElementById("inputFechaNac").value;
    anioActual = new Date().getFullYear();

    // PROCESO
    anioDeNacimiento = parseInt(anioDeNacimiento);
    edad = anioActual - anioDeNacimiento;

    // SALIDA(S)
    console.log("Hola " + nombreUsuario + "! Tenés " + edad + " años");
}

document.getElementById("elForm").onsubmit = procesar;