let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

slider.querySelector(".controls .up").addEventListener("click", function () {
  if (currentSlide == 0) {
    return;
  }
  currentSlide--;
  slider.querySelector(".wrapper .left div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper .right div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
});

slider.querySelector(".controls .down").addEventListener("click", function () {
  if (currentSlide == totalSlides) {
    return;
  }
  currentSlide++;
  slider.querySelector(".wrapper .left div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper .right div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
});
