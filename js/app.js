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