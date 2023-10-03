function closeMenuFunction() {
  var element = document.getElementById("backdrop-for-menu");
  element.classList.add("visually-hidden");
}

function openMenuFunction() {
  var element = document.getElementById("backdrop-for-menu");
  element.classList.remove("visually-hidden");
}