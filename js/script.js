// Añade sombra a la barra superior al hacer scroll
const barra = document.getElementById('nav');

function actualizarBarra() {
    barra.classList.toggle('scrolled', window.scrollY > 50);
}

window.addEventListener('scroll', actualizarBarra, { passive: true });
actualizarBarra();
