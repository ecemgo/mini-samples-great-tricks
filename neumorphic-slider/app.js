var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 1000,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
