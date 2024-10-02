const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const nextButton = document.querySelector(".controls button.forward");
const prevButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Symphony",
    name: "Clean Bandit ft. Zara Larsson",
    source: "song-list/Clean-Bandit-Symphony.mp3",
  },
  {
    title: "Pawn It All",
    name: "Alicia Keys",
    source: "song-list/Pawn-It-All.mp3",
  },
  {
    title: "Seni Dert Etmeler",
    name: "Madrigal",
    source: "song-list/Madrigal-Seni-Dert-Etmeler.mp3",
  },
  {
    title: "Instant Crush",
    name: "Daft Punk ft. Julian Casablancas",
    source: "song-list/Daft-Punk-Instant-Crush.mp3",
  },
  {
    title: "As It Was",
    name: "Harry Styles",
    source: "song-list/Harry-Styles-As-It-Was.mp3",
  },

  {
    title: "Physical",
    name: "Dua Lipa",
    source: "song-list/Dua-Lipa-Physical.mp3",
  },
  {
    title: "Delicate",
    name: "Taylor Swift",
    source: "song-list/Taylor-Swift-Delicate.mp3",
  },
];

let currentSongIndex = 3;

//! Updating song info
function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {
    //! Don't need to do anything here, the purpose is to ensure the event listener is added once
  });
}

//! Showing the current time and updating the progress bar more frequently
song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

//! Duration and current time of the song for the progress bar
song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

//! When the song is "ended", play the next song and update the slider
song.addEventListener("ended", function () {
  currentSongIndex = (swiper.activeIndex + 1) % songs.length;
  updateSongInfo();
  swiper.slideTo(currentSongIndex);
  playSong();
});

//! Function to pause the music and updating icons
function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

//! Function to play the music and updating icons
function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

//! Function to play or pause the music
function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

//! Jumping to the desired time of the song by clicking the progress bar
progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

//! When the song is still paused, if you click the progress bar, the song keeps playing
progress.addEventListener("change", function () {
  playSong();
});

//! Next song
nextButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

//! Previous song
prevButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

//! Listen for slide changes and update the song index
swiper.on("slideChange", function () {
  currentSongIndex = swiper.activeIndex;
  updateSongInfo();
  playPause();
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
