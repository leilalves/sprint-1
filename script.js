// Altera a cor de fundo do carrossel

function mudarFundo () {
const slide = document.getElementsByClassName('carousel-item')

    document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.carousel-item').forEach(box => {
        box.style.backgroundColor = box.getAttribute('data-bg');
    });
    });
};