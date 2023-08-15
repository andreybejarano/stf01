const secuencia = [];

// for (let index = 0; index < 10; index++) {
//     secuencia.push(index + 1);
// }

// // mostrar en consola elemento: x indice: y
// for (let index = 0; index < secuencia.length; index++) {
//     console.log('Elemento: ' + secuencia[index] + ' indice: ' + index);
// }

// console.log(secuencia);


// Iniciador
// Condicion de parada
// Modificador
let index = 0;
while (index < 10) {
    secuencia.push(index + 1);
    index++;
}

let j = 0;
while (j < secuencia.length) {
    console.log('Elemento: ' + secuencia[j] + ' indice: ' + j);
    j++;
}

// let stop = false;
// let index = 0;
// while (stop === false) {
//     if (index < 10) {
//         console.log('Elemento: ' + secuencia[index] + ' indice: ' + index);
//     } else {
//         console.log('Ya no es menor a 10');
//         stop = true;
//     }
//     index++;
// }






