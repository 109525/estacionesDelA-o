let mes = 34;

let estacion = 'Estación Desconocida'

switch(mes){
    case 1: case 2: case 12:
        estacion = "Invierno"
        break
    case  3: case  4: case  5:
        estacion = "Primavera"
        break
    case  6: case  7: case  8:
        valorEstacion = "Verano"
        break
    case  9: case  10: case  11:
        valorEstacion = "Otoño"
        break;
    default:
        estacion = 'Estación no existente';
    }
    console.log(estacion);