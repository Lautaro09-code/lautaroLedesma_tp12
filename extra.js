function upperConverter(texto) {
    return texto .toUpperCase();
}

/*
console.log("Texto en mayúsculas:", upperConverter("hola mundo")); 
console.log("Texto en mayúsculas:", upperConverter("javascript")); 
console.log("Texto en mayúsculas:", upperConverter("mi nombre es Lautaro")); 
*/

function dataType(parametro) {
    return typeof parametro;
}

/*
console.log("El tipo de dato de 'Texto' es:", dataType("Texto")); 
console.log("El tipo de dato de 42 es:", dataType(42)); 
console.log("El tipo de dato de true es:", dataType(true)); 
*/

function dogAge(edadPerro) {
    return edadPerro = edadPerro * 7;
}

/*
console.log("La edad del perro en años humanos es:", dogAge(3)); 
console.log("La edad del perro en años humanos es:", dogAge(5));
console.log("La edad del perro en años humanos es:", dogAge(1));    
*/

function hourPrice(salarioMensual,diasTrabajados,horasPorDia) {
    let salarioDiario = salarioMensual / diasTrabajados 
    let salarioHora = salarioDiario / horasPorDia
    return salarioHora
}

/*
console.log("El salario por hora es:", hourPrice(30000, 20, 8));
console.log("El salario por hora es:", hourPrice(45000, 22, 9));
console.log("El salario por hora es:", hourPrice(25000, 15, 5));   
*/

module.exports = { upperConverter, dataType, dogAge, hourPrice };