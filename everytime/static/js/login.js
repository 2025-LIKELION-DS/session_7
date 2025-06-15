const user = document.querySelector(".login1");
const pwd = document.querySelector(".login2");
const Button = document.querySelector(".button");

function Login() {
  if (user.value.trim() !== "" && pwd.value.length >= 8) {
    Button.style.backgroundColor = "red";
  } else {
    Button.style.backgroundColor = "";
  }
}
user.addEventListener("input", Login);
pwd.addEventListener("input", Login);
