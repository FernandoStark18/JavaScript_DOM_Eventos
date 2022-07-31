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
// console.log(1);

// window.addEventListener('load', function(){ // Load espera a que el JS y los archivos que dependen del HTML estén listos
//     console.log(2);
// });

// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4);
// })

// console.log(5);

// window.onscroll = () => console.log('Scrolling...');

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', (evento) => {
//     console.log(evento);
//     evento.preventDefault();

//     // Validar un formulario

//     console.log('enviando formulario...');
// });

// eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensajes: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar el formulario
    const { nombre, email, mensaje } = datos;

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    } 

    // Enviar el formulario

    console.log('Enviando formulario...');
    mostrarAlerta('formulario llenado correctamente', 'correcto');
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    // console.log(datos)
}

function mostrarAlerta(mensaje, error) {
    const alerta = document.createElement('P');

    alerta.textContent = mensaje;
    alerta.classList.add(error);
    formulario.appendChild(alerta);

    // Desaparezca depués de 5 segundos
    setTimeout(() => alerta.remove(), 5000);
}