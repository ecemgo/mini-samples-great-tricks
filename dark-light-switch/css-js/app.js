const body = document.querySelector("body");
const toggle = document.getElementById("toggle");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};
