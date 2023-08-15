const fs = require('fs');
const path = require('path');

// Armo la ruta absoluta del archivo que quiero leer
const pathFileBikes = path.resolve(__dirname, 'bicicletas.json');
const pathFileUser = path.resolve(__dirname, 'user.json');

// Leo el archivo con FS y almaceno su contenido en una variable
const fileBikes = fs.readFileSync(pathFileBikes, 'utf-8');
const fileUser = fs.readFileSync(pathFileUser, 'utf-8');

// Despues tengo q convertir ese contenido que me viene como string a un Array|Object segun el caso para poder tratarlo con JS
const bikes = JSON.parse(fileBikes);

const user = JSON.parse(fileUser);

user.lastname = 'Bejarano Sanchez';

fs.writeFileSync(pathFileUser, JSON.stringify(user, null, 2));

// Recorrer un array con un for comun
// for (let index = 0; index < bikes.length; index++) {
//     console.log(`id: ${bikes[index].id}, Marca: ${bikes[index].marca}`);
// }

// Recorrer un array con un forEach
// bikes.forEach((bike) => {
//     console.log(`id: ${bike.id}, Marca: ${bike.marca}`);
// });

// Me piden que cree un nuevo array solo con los IDs de las bicicletas
// Se crea un array llamado bikesIds solo con los IDs de las bicicletas
const bikesIds = bikes.map((bike) => {
    return bike.id;
});

// const bikesIds = [];
// bikes.forEach((bike) => {
//     bikesIds.push(bike);
// });
// console.log(bikesIds);

// Obtener solo las bicicletas cuyo anio sea igual a 2019
const bikes2019 = bikes.filter((bike) => {
    return bike.anio === 2019;
});

// const bikes2019 = [];
// bikes.forEach((bike) => {
//     if (bike.anio === 2019) {
//         bikes2019.push(bike);
//     };
// });

const bikeFirstId = bikes.find((bike) => {
    return bike.id === 1;
});

// Obtener el valor total de las bicicletas
// let total = 0;
// bikes.forEach((bike) => {
//     total += bike.precio;
// });

const total = bikes.reduce((acc, current) => {
    return acc + current.precio;
}, 0);

const totales = bikes.reduce((acc, current) => {
    if (current.vendida) {
        acc.totalVendidas += current.precio;
    }
    acc.total += current.precio; 
    return acc;
}, { total: 0, totalVendidas: 0 });


console.log(total);



