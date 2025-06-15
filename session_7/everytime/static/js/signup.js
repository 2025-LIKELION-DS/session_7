const nameInput = document.querySelector(".personal-name");
const nnInput = document.querySelector(".personal-nickname");
const emailInput = document.querySelector(".personal-email");
const pwInput = document.querySelector(".personal-password");
const repwInput = document.querySelector(".personal-repassword");
const CompleteButton = document.querySelector(".completeBtn");

function newpersonalInput() {
  const nameValue = nameInput.value.trim();
  const nnValue = nnInput.value.trim();
  const emailValue = emailInput.value.trim();
  const pwValue = pwInput.value.trim();
  const repwValue = repwInput.value.trim();

  if (
    nameValue.length > 1 &&
    nnValue.length > 0 &&
    emailValue.length > 10 &&
    pwValue.length >= 8 &&
    repwValue.length >= 8
  ) {
    CompleteButton.style.backgroundColor = "#F91F15";
  } else {
    CompleteButton.style.backgroundColor = "#737373";
  }
}

nameInput.addEventListener("input", newpersonalInput);
nnInput.addEventListener("input", newpersonalInput);
emailInput.addEventListener("input", newpersonalInput);
pwInput.addEventListener("input", newpersonalInput);
repwInput.addEventListener("input", newpersonalInput);
