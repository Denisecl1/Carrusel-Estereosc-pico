let currentIndex = 1;

function mostrarSideBySide() {
  document.getElementById("mainViewer").classList.remove("d-none");
  document.getElementById("sbsLabels").classList.remove("d-none");
  document.getElementById("anaglifoViewer").classList.add("d-none");
}

function mostrarAnaglifo() {
  document.getElementById("mainViewer").classList.add("d-none");
  document.getElementById("sbsLabels").classList.add("d-none");
  document.getElementById("anaglifoViewer").classList.remove("d-none");
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("stereoCarousel");
  const mainViewer = document.getElementById("mainViewer");
  const anaglifoImage = document.getElementById("anaglifoImage");

  carousel.addEventListener("slid.bs.carousel", function (event) {
    currentIndex = event.to + 1;

    mainViewer.src = `img/SBS${currentIndex}.jpg`;
    anaglifoImage.src = `img/ana${currentIndex}.jpg`;
  });
});