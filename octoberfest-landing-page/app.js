const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");
// console.log(modalOpenBtns);

modalOpenBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target);
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
    body.classList.add("prevent-scroll");
  });
});

modalCloseBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target);
    let modal = (btn.closest(".modal").style.display = "none");
    body.classList.remove("prevent-scroll");
  });
});

document.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    body.classList.remove("prevent-scroll");
  }
});
