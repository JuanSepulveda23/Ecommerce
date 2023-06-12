//Selección del botón del menú y la barra de navegación
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => { // Función que se ejecuta cuando se hace clic en el botón del menú
    menu.classList.toggle('fas-times'); // Cambia la clase del botón del menú para mostrar un ícono diferente
    navbar.classList.toggle('active'); // Cambia la clase de la barra de navegación para mostrarla o ocultarla
}

window.onscroll = () => { // Función que se ejecuta cuando se realiza un desplazamiento en la ventana
     // Elimina las clases del botón del menú para mostrar su apariencia original
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}
// Selección de los slides de la página principal
let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() { // Función para mostrar el siguiente slide
    slides[index].classList.remove('active'); // Oculta el slide actual
    // Calcula el índice del siguiente slide y lo muestra
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev() { // Función para mostrar el slide anterior
    slides[index].classList.remove('active'); // Oculta el slide actual
    // Calcula el índice del slide anterior y lo muestra
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}