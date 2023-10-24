gsap.from("#leftside", {
  scrollTrigger: {
    scrub: true,
  },
  x: -100,
});

gsap.from("#rightside", {
  scrollTrigger: {
    scrub: true,
  },
  x: 100,
});

gsap.from("#leftpumpkin", {
  scrollTrigger: {
    scrub: true,
  },
  x: -150,
});

gsap.from("#rightpumpkin", {
  scrollTrigger: {
    scrub: true,
  },
  x: 150,
});

var swiper = new Swiper(".mySwiper", {
  speed: 700,
  enabled: true,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
