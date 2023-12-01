const h1 = document.querySelector('h1');

const darkMode = confirm('¿Desea modo oscuro?');

if (darkMode) {
    document.body.style.backgroundColor = '#7f7f7f';
    document.body.classList.add('fondoMoviesList');
}

h1.innerText = 'LISTADO DE PELÍCULAS';
h1.classList.add('moviesTitle');
