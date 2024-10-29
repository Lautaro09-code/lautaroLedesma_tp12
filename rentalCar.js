//rentalCar
function rentalCar(tipoVehiculo, diasAlquiler, sillaBebe) {
    let costoDiario;

switch (tipoVehiculo){
    case "compacto":
        costoDiario = 14000;
        break;
    case "mediano":
        costoDiario = 17000;
        break;
    case "camioneta":
        costoDiario = 28000;
        break;
    default:
        console.log("Tipo de vehículo no válido");
        return;
}

let total = costoDiario * diasAlquiler;

if (sillaBebe){
    costoDiario = costoDiario + 1200;
    console.log("Estimado cliente: en base al tipo de vehículo", tipoVehiculo)
    console.log("alquilado, considerando los", diasAlquiler, "días utilizados, al igual")
    console.log("que la silla para bebes. El monto total a pagar es de:$", total);
}else 
    console.log("Estimado cliente: en base al tipo de vehículo", tipoVehiculo)
    console.log("alquilado, considerando los", diasAlquiler, "días utilizados")
    console.log("el monto total a pagar es de:$", total);
}

/*
rentalCar("mediano",7,true)
rentalCar("camioneta",3,false)
rentalCar("mediano",15,true)
rentalCar("compacto",1,false)
*/