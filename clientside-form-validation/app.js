const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const header = document.querySelector(".header");
const button = document.querySelector("button");
const message = document.querySelector(".message");

//! submit the form when clicking the button
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    username.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmpassword.value.trim() !== password.value.trim()
  ) {
    checkInputs();
  } else {
    submittedForm();
  }
});

//! check whether inputs are empty or not
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (confirmpasswordValue === "") {
    setErrorFor(confirmpassword, "Password cannot be blank");
  } else if (passwordValue !== confirmpasswordValue) {
    setErrorFor(confirmpassword, "Password does not match!");
  } else {
    setSuccessFor(confirmpassword);
  }
}

//! add error class to the form-control
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}

//! add success class to the form-control
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//! check email with Regex
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//! show the message of 'submitted'
function submittedForm() {
  header.classList.add("hidden");
  form.classList.add("hidden");
  message.classList.remove("hidden");
  ani();
  setTimeout("location.reload(true);", 3000);
}

//! add animation to the message
function ani() {
  message.classList.add("fade-in");
}
