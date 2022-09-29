// DEFINICIONES
function saludar() {
    console.log("Hola");
}

function saludarA(nombre) {
    console.log(`Hola ${nombre}`);
}

function siguiente(x) {
    return x + 1;
}


// PROGRAMA PRINCIPAL
for (let i = 0; i < 5; i++) {
    saludar(); // Invocar
    saludarA("Juan"); // Invocar 
    let elSigte = siguiente(i);
}