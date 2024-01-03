const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const title = document.querySelector(".title");
const button = document.querySelector("button");
const message = document.querySelector(".message");

//! Event listeners for real-time input validation
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmpassword.addEventListener("input", validateConfirmPassword);

//! Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    submittedForm();
  }
});

//! Validation functions
function validateUsername() {
  const usernameValue = username.value.trim();
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
    return false;
  } else {
    setSuccessFor(username);
    return true;
  }
}

function validateEmail() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    return false;
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
    return false;
  } else {
    setSuccessFor(email);
    return true;
  }
}

function validatePassword() {
  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
    return false;
  } else {
    setSuccessFor(password);
    return true;
  }
}

function validateConfirmPassword() {
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();
  if (confirmpasswordValue === "") {
    setErrorFor(confirmpassword, "Confirm Password cannot be blank");
    return false;
  } else if (passwordValue !== confirmpasswordValue) {
    setErrorFor(confirmpassword, "Password does not match!");
    return false;
  } else {
    setSuccessFor(confirmpassword);
    return true;
  }
}

//! Helper functions
function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const small = inputControl.querySelector("small");

  small.innerText = message;
  inputControl.classList.remove("success");
  inputControl.classList.add("error");
  inputControl.style.paddingBottom = "20px";
  inputControl.style.marginBottom = "14px";
}

function setSuccessFor(input) {
  const inputControl = input.parentElement;

  inputControl.classList.remove("error");
  inputControl.classList.add("success");
  inputControl.style.paddingBottom = "0";
  inputControl.style.marginBottom = "20px";
}

//! Checking email
function isEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}

// https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/

//! Showing the 'submitted' message
function submittedForm() {
  title.classList.add("hidden");
  form.classList.add("hidden");
  message.classList.remove("hidden");
  setTimeout(() => location.reload(true), 2500);
}
