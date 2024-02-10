// GSAP

gsap.registerPlugin(Observer);

console.clear();

let sections = document.querySelectorAll("section"),
  background = document.querySelectorAll(".bg"),
  outerWrappers = gsap.utils.toArray(".outer"),
  innerWrappers = gsap.utils.toArray(".inner"),
  currentIndex = -1,
  wrap = gsap.utils.wrap(0, sections.length - 1),
  animating;

let clamp = gsap.utils.clamp(0, sections.length - 1);

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction) {
  index = clamp(index); // make sure it's valid

  // If they are the same, it's either the first or last slide
  if (index === currentIndex) {
    return;
  }

  animating = true;
  let fromTop = direction === -1,
    dFactor = fromTop ? -1 : 1,
    tl = gsap.timeline({
      defaults: { duration: 1.25, ease: "power1.inOut" },
      onComplete: () => (animating = false),
    });
  if (currentIndex >= 0) {
    // The first time this function runs, current is -1
    gsap.set(sections[currentIndex], { zIndex: 0 });
    tl.to(background[currentIndex], { yPercent: -15 * dFactor }).set(
      sections[currentIndex],
      { autoAlpha: 0 }
    );
  }
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo(
    [outerWrappers[index], innerWrappers[index]],
    { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
    { yPercent: 0 },
    0
  ).fromTo(background[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);

  currentIndex = index;
  return tl;
}

Observer.create({
  type: "wheel, pointer",
  wheelSpeed: -1,
  onDown: () => {
    !animating && gotoSection(currentIndex - 1, -1);
  },
  onUp: () => {
    !animating && gotoSection(currentIndex + 1, 1);
  },
  tolerance: 200,
  allowClicks: true,
  preventDefault: true,
});

gotoSection(0, 1).progress(1);

// SWIPER

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
