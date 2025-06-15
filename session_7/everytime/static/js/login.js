const idInput = document.querySelector(".login-id");
const pwInput = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-complete");

function personalInput() {
  const idValue = idInput.value.trim();
  const pwValue = pwInput.value.trim();

  if (idValue.length > 0 && pwValue.length >= 8) {
    loginBtn.style.backgroundColor = "#F91F15";
  } else {
    loginBtn.style.backgroundColor = "#737373";
  }
}

idInput.addEventListener("input", personalInput);
pwInput.addEventListener("input", personalInput);
