function mostrarSideBySide() {
  document.getElementById("sideBySide").classList.remove("d-none");
  document.getElementById("anaglifo").classList.add("d-none");
}

function mostrarAnaglifo() {
  document.getElementById("sideBySide").classList.add("d-none");
  document.getElementById("anaglifo").classList.remove("d-none");
}