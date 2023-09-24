let split = new SplitText("#text");

gsap.from("#m1", {
  scrollTrigger: {
    scrub: true,
  },
  y: 100,
});

gsap.from("#m2", {
  scrollTrigger: {
    scrub: true,
  },
  y: 150,
});

gsap.from("#t2", {
  scrollTrigger: {
    scrub: true,
  },
  x: -50,
  y: 100,
});

gsap.from("#t1", {
  scrollTrigger: {
    scrub: true,
  },
  x: 50,
});

gsap.from("#man", {
  scrollTrigger: {
    scrub: true,
  },
  x: -200,
});

gsap.from("#plants", {
  scrollTrigger: {
    scrub: true,
  },
  y: 50,
  x: -100,
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
