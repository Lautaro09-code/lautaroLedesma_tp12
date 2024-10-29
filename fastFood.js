//fastFood
let jamon = 30;
let queso = 25;
let salsaTomate = 5;
let mayonesa = 5;
let mostaza = 5;
let tomate = 15;
let lechuga = 10;
let cebolla = 10;

function callBack(tipoHamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla) {
    let total = 0;
    switch (tipoHamburguesa) {
        case "carne a la parrilla":
            total = total + 1800;
            break;
        case "pollo":
            total = total + 1500;
            break;
        case "vegetariano":
            total = total + 1200;
            break;
        default:
            console.log("Ingrese un opción valida")
            return total
    }
    if (jamon) total += 30;
    if (queso) total += 25;
    if (salsaTomate) total += 5;
    if (mayonesa) total += 5;
    if (mostaza) total += 5;
    if (tomate) total += 15;
    if (lechuga) total += 10;
    if (cebolla) total += 10;
    return total;
}
function fastFood(nombre,apellido,tipoHamburguesa,jamon,queso,salsaTomate,mayonesa,mostaza,tomate,lechuga,cebolla) {
    let total = callBack(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    console.log("Estimado", nombre, apellido,"el monto total a pagar es de: $",total)
}

/*
fastFood("Lautaro", "Ledesma", "pollo", true, false, true, true, false, false, true, false);
fastFood("Gabriel", "Ledesma", "vegetariano", true, false, true, true, false, true, true, true);
fastFood("Emiliano", "Ledesma", "carne a la parrilla", false, false, false, true, false, false, true, false);
fastFood("Roberto", "Pérez", "pollo", false, true, false, false, true, true, true, false);
*/