let persona = {
    colorDePelo: "Negro",
    nombre: "Alan",
    apellido: "Turing",
    estatura: 1.82,
    edad: 40,
    auto: {
        marca: "Ford",
        modelo: "Fiesta",
        anioFabricacion: 2019,
        motor: {
            cilindrada: 1.4,
            nro: "123123123123",
            tipo: "Nafta"
        }
    },
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`;
    },
    saludar: function(conEntusiasmo) {
        let saludo = `Hola, soy ${this.nombreCompleto()}`;
        if (conEntusiasmo) {
            saludo = saludo + "!!!";
        }
        console.log(saludo);
    }
};

console.log( persona.nombreCompleto() );
persona.saludar(true);
persona.saludar(false);