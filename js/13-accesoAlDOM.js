/*
    Todas las pruebas las hacemos en la consola del navegador.
    (Mirar la clase grabada)
*/

// Traer elemento (único) por ID
const elInputDeNombre = document.getElementById("inputNombre");

// Traer elemento/s por nombre de etiqueta
const lasEtiquetas = document.getElementsByTagName("label"); // Devuelve un HTMLCollection, que es como un array

// Traer elemento/s por clase
const losAzules = document.getElementsByClassName("azul"); // Devuelve un HTMLCollection, que es como un array

// Traer elemento por query (selector de CSS)
const elInputDeNombre2 = document.querySelector("#inputNombre"); // Por ID
const lasEtiquetas2 = document.querySelectorAll("label"); // Por tag
const losAzules2 = document.querySelectorAll(".azul"); // Por class
const losInputsDelForm = document.querySelectorAll("#elForm input"); // Selectores combinados