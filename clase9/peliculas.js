// Microdesafio 1

/* 

Crear un archivo llamado peliculas.js. Este archivo será un
módulo que contiene una lista con algunas de nuestras películas favoritas.
Para eso nos recomiendan crear un array de objetos literales. No olvides
que este archivo es un módulo propio y por tal motivo una vez que se crea…
¿cuál debería ser nuestra última línea de código?
Por cada película se necesita conocer esta información:
i. Identificador único de la película (id)
ii. Calificación por parte de los usuarios (rating)
iii. awards (awards).
iv. Duración de la película (length).
v. Precio (price).
vi. Género de la película (genre):
1. Acción
2. Animación
3. Aventuras
4. Comedia
5. Suspenso.

*/

const peliculas = [
    {
        id: 1,
        rating: 7,
        awards: 2,
        length: 120,
        price: 2000,
        genre: "Acción"
    },
    {
        id: 2,
        rating: 3,
        awards: 0,
        length: 150,
        price: 1500,
        genre: "Suspenso"
    },
    {
        id: 3,
        rating: 9,
        awards: 4,
        length: 900,
        price: 3500,
        genre: "Animación"
    },
    {
        id: 4,
        rating: 8,
        awards: 1,
        length: 45,
        price: 2000,
        genre: "Aventuras"
    }
];

module.exports = peliculas;