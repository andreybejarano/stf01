// document.querySelector captura el primer elemento que encuentre en el DOM ya sea por id, class o nombre de etiqueta
const main = document.querySelector('main');
const linkToMovies = document.querySelector('h2 a');
// document.getElementById captura el elemento por el atributo id
const subtitle = document.getElementById('subtitulo');
// document.querySelectorAll captura todos los elementos que tengan el mismo selector
const p = document.querySelectorAll('p');

const name = prompt('Ingrese su nombre');

subtitle.innerText += name ? ` ${name}` : ' Invitado';

subtitle.innerText = subtitle.innerText.toUpperCase();

linkToMovies.style.color = '#E51B3E';

const addBackground = confirm('¿Desea colocar un fondo de pantalla?');

if (addBackground) {
    document.body.classList.add('fondo');
}

p.forEach((element, index) => {
    const className = ((index + 1) % 2 === 0) ? 'destacadoPar' : 'destacadoImpar';
    element.classList.add(className);
});

main.style.display = 'block';