// Promedio alumnos graduados por curso

// a
let html = "30 45 25 34 18 23 16 50 72 70";
let css = "50 45 71 34 23 45 65 75 63 43 74 70";
let js = "70 65 58 45 23 57 34 17 72";
let node = "45 56 73 34 65 72 70 32";

// b
html = html.split(" ");
css = css.split(" ");
js = js.split(" ");
node = node.split(" ");

// c
function calcularPromedio (arrayHtml, arrayCss, arrayJs, arrayNode, seleccion) {
    switch (seleccion) {
        case 1:
        return "El promedio del curso HTML es de " + promedio(arrayHtml);
        case 2:
        return "El promedio del curso CSS es de " + promedio(arrayCss);
        case 3:
        return "El promedio del curso JS es de " + promedio(arrayJs);
        case 4:
        return "El promedio del curso NodeJS es de " + promedio(arrayNode);
        default:
        return "Los valores asignados a cada curso son:" +
        "\nHTML: " + arrayHtml +
        "\nCSS: "  + arrayCss +
        "\nJS: " + arrayJs +
        "\nNodeJS: " + arrayNode;
    }
}

console.log(calcularPromedio(html, css, js, node, 4));

function promedio (valores) {
    let suma = 0;
    for (let index = 0; index < valores.length; index++) {
        suma += Number(valores[index]); 
    }
    
    return suma / valores.length;
}
