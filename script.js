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

// Dashboard

function abrirLista(idLista, idIcone) {
        const lista = document.getElementById(idLista);
        const icone = document.getElementById(idIcone);

        if (lista.style.display === "block") {
            lista.style.display = "none";
            icone.className = "bi bi-chevron-down";
        } else {
            lista.style.display = "block";
            icone.className = "bi bi-chevron-up";
        }
    }