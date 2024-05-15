const heroes = document.querySelectorAll(".hero");

heroes.forEach((hero) => {
  hero.addEventListener("click", () => {
    removeActiveClasses();
    hero.classList.add("active");
  });
});

function removeActiveClasses() {
  heroes.forEach((hero) => {
    hero.classList.remove("active");
  });
}
