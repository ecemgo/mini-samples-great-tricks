const modal = document.getElementById("gameOverModal");
const guessInput = document.getElementById("guessInput");
const scoreBoard = document.getElementById("score");
const movieImage = document.getElementById("movieImage");
const modalContent = document.querySelector(".modal-content");

const movies = [
  { name: "Interstellar", image: "images/interstellar.jpg" },
  { name: "Avatar", image: "images/avatar.jpg" },
  { name: "Titanic", image: "images/titanic.jpg" },
  { name: "The Matrix", image: "images/the-matrix.jpg" },
  { name: "Joker", image: "images/joker.jpg" },
  { name: "The Godfather", image: "images/godfather.jpg" },
  { name: "Forrest Gump", image: "images/forrest-gump.jpg" },
  { name: "Ice Age", image: "images/ice-age.jpg" },
  { name: "Gone Girl", image: "images/gone-girl.jpg" },
  { name: "The Truman Show", image: "images/the-truman-show.jpg" },
  { name: "La La Land", image: "images/la-la-land.jpg" },
  { name: "Oppenheimer", image: "images/oppenheimer.jpg" },
  { name: "Toy Story", image: "images/toy-story.jpg" },
  { name: "Whiplash", image: "images/whiplash.jpg" },
  { name: "A Beautiful Mind", image: "images/a-beautiful-mind.jpg" },
  { name: "Black Swan", image: "images/black-swan.jpg" },
  { name: "The Intouchables", image: "images/the-intouchables.jpg" },
  { name: "Inception", image: "images/inception.jpg" },
  { name: "The Shawshank Redemption", image: "images/shawshank.jpg" },
  { name: "Edward Scissorhands", image: "images/edward-scissorhands.jpg" },
  { name: "Ratatouille", image: "images/ratatouille.jpg" },
  { name: "The Father", image: "images/the-father.jpg" },
];

let score;
let currentMovieIndex;
let warningShown = false;

function preloadImages() {
  movies.forEach((movie) => {
    const img = new Image();
    img.src = movie.image;
  });
}

function startGame() {
  score = 0;
  updateScore();
  currentMovieIndex = 0;
  getNextMovie();
}

//! Function to get a random movie
function getNextMovie() {
  const currentMovie = movies[currentMovieIndex];
  movieImage.src = currentMovie.image;
}

//! Function to check the user's guess
function checkGuess() {
  const userGuess = guessInput.value.trim().toLowerCase();
  const currentMovie = movies[currentMovieIndex];

  if (userGuess === currentMovie.name.toLowerCase()) {
    movieImage.style.boxShadow = "-1px 1px 25px 14px #52ffa880";
    movieImage.style.outline = "3px solid #52ffa9";

    setTimeout(() => {
      score++;
      updateScore();
      currentMovieIndex++;
      guessInput.value = "";
      resetStyles();
      scoreBoard.classList.add("animation");

      if (score < movies.length) {
        getNextMovie();
      } else {
        showWinGameModal();
      }
    }, 700);
  } else if (userGuess === "") {
    if (!warningShown) {
      showWarningMessage();
      warningShown = true;
    }
  } else {
    movieImage.style.boxShadow = "-1px 1px 25px 16px #a20927";
    movieImage.style.outline = "3px solid #a20927";
    scoreBoard.classList.remove("animation");

    if (!warningShown) {
      currentMovieIndex++;
    }
    showGameOverModal();
  }
}

//! Function to update the score display
function updateScore() {
  scoreBoard.textContent = `Score: ${score}`;
}

//! Function to show the warning message
function showWarningMessage() {
  modalContent.innerHTML = `
    <p class="message">Please enter a movie name! 👀</p>
    <button class="btn" onclick="closeModal()">Close</button>
  `;

  modal.style.display = "flex";
  document.addEventListener("keyup", closeModalOnEnter);
}

//! Function to show the game over modal
function showGameOverModal() {
  modalContent.innerHTML = `
    <p class="message">Game Over! 😔</p>
    <p>Total Score: ${score}</p>
    <button class="btn" onclick="closeModal()">Close</button>
  `;

  modal.style.display = "flex";
  document.addEventListener("keyup", closeModalOnEnter);
}

//! Function to show the modal when the user win the game
function showWinGameModal() {
  modalContent.innerHTML = `
    <p class="message">You won the game! 🎉</p>
    <p>Total Score: ${score}</p>
    <button class="btn" onclick="closeModal()">Close</button>
  `;

  modal.style.display = "flex";
  scoreBoard.classList.remove("animation");
  document.addEventListener("keyup", closeModalOnEnter);
}

//! Function to close the modal on Enter key press
function closeModalOnEnter(e) {
  if (e.key === "Enter" && modal.style.display === "flex") {
    modal.style.display = "none";
    modalContent.innerHTML = "";
    guessInput.value = "";
    resetStyles();
    document.removeEventListener("keyup", closeModalOnEnter);

    if (!warningShown) {
      startGame();
    } else {
      warningShown = false;
    }
  }
}

//! Function to close the modal by clicking "OK" button
function closeModal() {
  modal.style.display = "none";
  modalContent.innerHTML = "";
  guessInput.value = "";
  resetStyles();
  document.removeEventListener("keyup", closeModalOnEnter);

  if (!warningShown) {
    startGame();
  } else {
    warningShown = false;
  }
}

//! Event listener for the Enter key to automatically check the guess
document.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && modal.style.display !== "flex") {
    checkGuess();
  }
});

//! Function to focus on input
function focusOnInput() {
  guessInput.focus();
}

//! Function to reset the styles
function resetStyles() {
  movieImage.style.boxShadow = "";
  movieImage.style.outline = "";
}

//! Get the cursor position in the input
guessInput.addEventListener("keyup", (e) => {
  console.log("Caret at: ", e.target.selectionStart);
});

//! Start the game when the page loads
window.onload = startGame;

particlesJS("particles-js", {
  particles: {
    number: {
      value: 140,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#673fd7", "#f0f8ff", "#861246"],
    },
    shape: {
      type: ["star", "circle"],
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 2,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.4,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
});
