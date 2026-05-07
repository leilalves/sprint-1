// Altera a cor de fundo do carrossel

function atualizarFundo() {
    const slideAtivo = document.querySelector('.carousel-item.active');

    if (slideAtivo) {
        const cor = slideAtivo.dataset.bg;

        document.body.style.backgroundColor = cor;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarFundo();

    const carousel = document.querySelector('#customCarousel');

    carousel.addEventListener('slid.bs.carousel', () => {
        atualizarFundo();
    });
});