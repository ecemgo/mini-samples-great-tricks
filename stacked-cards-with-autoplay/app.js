const stack = document.querySelector(".stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("card"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");

    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 1200);
  }
}

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.insertBefore(card, stack.firstElementChild);
      resetAutoplay();
    }, 1200);
  }
});

let autoplayInterval = setInterval(moveCard, 4000);

function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(moveCard, 4000);
}

// Plus, with the addEventListener() method, you can click on the stacked cards and see the next card.

// Inspired by Hirok Banik https://codepen.io/hirokbanik/pen/XWWNQza?editors=0010
