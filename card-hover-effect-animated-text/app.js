const likeBtn = document.querySelector(".like-btn");

likeBtn.addEventListener("click", function () {
  if (likeBtn.classList.contains("active")) {
    likeBtn.classList.remove("active");
  } else {
    likeBtn.classList.add("active");
  }
});
