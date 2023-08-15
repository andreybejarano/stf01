// 1
function encontrarNumero(arrayNumeros, numero) {
    if (arrayNumeros.includes(numero)) {
        return "El número "+ numero +" sí existe en el array";
    } else {
        return "El valor solicitado no existe";
    }
}
// console.log(encontrarNumero([1,2,3,4,5,6], 3))


// 2 
const opciones = ["Toma 1" ,"Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"]

function juegoDeTrompito(opciones, cantVueltas) {
    const random = Math.floor(Math.random() * cantVueltas);
    return opciones[random];
}

// console.log(juegoDeTrompito(5));

// 3
function sumatoriaParImpar(valores) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 2 == 0) {
            pares += valores[i];
        } else {
            impares += valores[i];
        }
    }
    return [pares, impares];
}

// console.log(sumatoriaParImpar([2,4,3,5]))