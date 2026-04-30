let currentIndex = 1;
let carouselInstance;

function mostrarSideBySide() {
  document.getElementById("mainViewer").classList.remove("d-none");
  document.getElementById("sbsLabels").classList.remove("d-none");
  document.getElementById("anaglifoViewer").classList.add("d-none");

  // Reanudar carrusel
  carouselInstance.cycle();
}

function mostrarAnaglifo() {
  document.getElementById("mainViewer").classList.add("d-none");
  document.getElementById("sbsLabels").classList.add("d-none");
  document.getElementById("anaglifoViewer").classList.remove("d-none");

  // Pausar carrusel
  carouselInstance.pause();
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("stereoCarousel");
  const mainViewer = document.getElementById("mainViewer");
  const anaglifoImage = document.getElementById("anaglifoImage");

  // Instancia del carrusel Bootstrap
  carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000,   // cambia cada 4 segundos
    ride: "carousel"
  });

  carousel.addEventListener("slid.bs.carousel", function (event) {
    currentIndex = event.to + 1;

    mainViewer.src = `img/SBS${currentIndex}.JPG`;
    anaglifoImage.src = `img/ana${currentIndex}.JPG`;
  });
});