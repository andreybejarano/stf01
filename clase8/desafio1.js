// Facturación

// a
const catalogoCursos = [
    ["html5", 4000],
    ["css3", 5000],
    ["javascript", 10000],
    ["react", 7000],
    ["nodejs", 15000]
];

// b
const cursosElegidos = ["HTML5", "CSS3", "JAVASCRIPT"];

// c
function calcularPrecio(catalogo, cursosAlumno) {
    let precio = 0;

    for (let i = 0; i < catalogo.length; i++) {
        if (cursosAlumno.includes(catalogo[i][0].toUpperCase())) {
            precio = precio + catalogo[i][1];
        }
    }

    return precio;
}
// console.log(calcularPrecio(catalogoCursos,cursosElegidos))

// d
function facturar(nombre, apellido, catalogoCursos, cursosAlumno, callback) {
    let monto = callback(catalogoCursos, cursosAlumno);

    console.log("Estimado " + nombre + " " + apellido + ", en función de los cursos seleccionados:");
    for (let i = 0; i < cursosAlumno.length; i++) {
        console.log(i + 1 + ".- " + cursosAlumno[i]);
    }
    console.log("El monto total a pagar es de: $" + monto);
    console.log("Bienvenido a la gran aventura de Digital House.")
    return [nombre + " " + apellido, monto];
}

// e
console.log(facturar("Facu", "Erbin", catalogoCursos, cursosElegidos, calcularPrecio));
