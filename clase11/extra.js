
/* 1 */
let arrayNumeros = [4, 5, 76, 135, 22, 9, 87, 15, 1, 45];

/* 2 */
let [num1, , num2, , num3] = arrayNumeros;

/* console.log(num1, num2, num3); */

/* 3 */
let nuevoArrayNumeros = [num1, num2, num3];

console.table(nuevoArrayNumeros);

/* 4 */

let mascota = {
    nombre: "Luffy",
    tipo: "perro",
    color: "negro",
    raza: "Border Collie"
}

let {nombre, tipo, color, raza} = mascota;

console.log("Hola les presento a mi mascota, su nombre es: " + nombre + ", es un hermoso " + tipo + ", de color: " + color + " y su raza es: " + raza);