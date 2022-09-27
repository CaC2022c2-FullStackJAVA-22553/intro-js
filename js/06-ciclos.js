/**
 * Mostrar 5 veces la leyenda "Debo practicar programación", numeradas
 */

 console.log("CON WHILE")
let cont = 1;
while (cont <= 5) {
    console.log(`${cont}) Debo practicar programación`);
    cont = cont + 1; // cont++ // cont += 1
}
console.log("CON FOR")
for (let i = 1; i <= 5; i++) {
    console.log(`${i}) Debo practicar programación`);
}

/*
    ESTO NO SIRVE
    cont = cont++;
*/