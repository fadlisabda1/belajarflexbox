const input = document.querySelector(".menu-toggle input");
const span = document.querySelector("ul");
input.addEventListener("click", function () {
  span.classList.toggle("slide");
});
