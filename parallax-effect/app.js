let split = new SplitText("#title");

gsap.from("#woman", {
  scrollTrigger: {
    scrub: true,
  },
  y: -100,
});

gsap.from("#leftplant", {
  scrollTrigger: {
    scrub: true,
  },
  x: -150,
});

gsap.from("#rightplant", {
  scrollTrigger: {
    scrub: true,
  },
  x: 150,
});

gsap.from("#ball", {
  scrollTrigger: {
    scrub: true,
  },
  x: -200,
});

gsap.from("#lifebuoy", {
  scrollTrigger: {
    scrub: true,
  },
  x: 200,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax",
      start: "top 50%",
      end: "bottom top",
      toggleActions: "restart none none reset",
    },
  })
  .from(split.chars, {
    yPercent: -100,
    stagger: 0.05,
    duration: 0.3,
    ease: "back",
  })
  .from(split.chars, { opacity: 0, stagger: 0.05, duration: 0.2 }, 0)
  .from("button", { y: 100, opacity: 0, ease: "back", duration: 1 }, "<1");
