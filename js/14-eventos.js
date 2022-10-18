// Ejemplo de botón con 'onclick'
const btnProbar = document.getElementById("btnProbar");

function saludar() {
    const elParrafo = document.getElementById("resultado");
    elParrafo.innerHTML = "Holaaaa";
}

btnProbar.onclick = saludar;

/////////////////////////////////////////////////////////

const h2Conteo = document.getElementById("conteo");
const btnResetear = document.getElementById("btnResetear");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
let contador = 0;

function asignarNuevoValor(valor) {
    contador = valor;
    h2Conteo.innerHTML = valor;
}

function reset() {
    asignarNuevoValor(0);
}

function incrementar() {
    asignarNuevoValor(contador + 1);
}

function decrementar() {
    asignarNuevoValor(contador - 1);
}

function cambiarColor(event) {
    // event: Parámetro con la info del evento (lo envía JS)
    // target: Es una propiedad del evento, hace referencia al componente que lo originó.
    event.target.style.background = "blue";
}


btnResetear.onmouseover = cambiarColor;
btnIncrementar.onmouseover = cambiarColor;
btnDecrementar.onmouseover = cambiarColor;
h2Conteo.onmouseover = cambiarColor;

btnResetear.onclick = reset;
btnIncrementar.onclick = incrementar;
btnDecrementar.onclick = decrementar;

/////////////////////////////////////////////////////////////

const inputNombre = document.getElementById("inputNombre");
const pLeyenda = document.getElementById("leyenda");

function procesarNombre() {
    const nombre = inputNombre.value;
    const saludo = `Hola ${nombre}`;
    const longitud = `Cant. de caracteres: ${nombre.length}`;
    pLeyenda.innerHTML = `${saludo}. ${longitud}`;
}

inputNombre.onkeyup = procesarNombre;