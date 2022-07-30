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
enlaces[0].classList.remove('navegacion__enlace');

// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);