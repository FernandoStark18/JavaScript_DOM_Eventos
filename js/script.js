// querySelector
const heading = document.querySelector('.header__texto h2'); // Retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = 'Nuevo texto para enlace'
enlaces[0].href = 'http://www.google.com/';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

// Eventos
console.log(1);

window.addEventListener('load', function(){ // Load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
})

console.log(5);

window.onscroll = () => console.log('Scrolling...');