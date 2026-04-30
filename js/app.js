let currentIndex = 1;
let carouselInstance;

function mostrarSideBySide() {
  // Mostramos contenedor SBS y sus etiquetas
  document.getElementById("mainViewer").classList.remove("d-none");
  document.getElementById("sbsLabels").classList.remove("d-none");
  
  // Ocultamos el visor Anaglifo
  document.getElementById("anaglifoViewer").classList.add("d-none");

  // Reanudamos el carrusel para el recorrido normal
  carouselInstance.cycle();
}

function mostrarAnaglifo() {
  // Ocultamos SBS y sus etiquetas
  document.getElementById("mainViewer").classList.add("d-none");
  document.getElementById("sbsLabels").classList.add("d-none");
  
  // Mostramos el visor Anaglifo
  document.getElementById("anaglifoViewer").classList.remove("d-none");

  // Pausamos carrusel para evitar mareos al usar lentes 3D
  carouselInstance.pause();
}

document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.getElementById("stereoCarousel");
  const mainViewer = document.getElementById("mainViewer");
  const anaglifoImage = document.getElementById("anaglifoImage");

  // Instancia del carrusel de Bootstrap
  carouselInstance = new bootstrap.Carousel(carouselElement, {
    interval: 3000,   // Tiempo de transición automático (3 segundos)
    ride: "carousel"
  });

  // Evento que escucha cada vez que la imagen del carrusel cambia
  carouselElement.addEventListener("slid.bs.carousel", function (event) {
    // event.to empieza en 0, sumamos 1 para igualar el nombre del archivo (1 al 15)
    currentIndex = event.to + 1;

    // Actualización dinámica de las rutas de las imágenes en los visores inferiores
    mainViewer.src = `img/SBS${currentIndex}.JPG`;
    anaglifoImage.src = `img/ana${currentIndex}.JPG`;
  });
});