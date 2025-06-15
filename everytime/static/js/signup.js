const Name = document.getElementById("inputplace1");
const nickname = document.getElementById("inputplace2");
const email = document.getElementById("inputplace3");
const pwd = document.getElementById("inputplace4");
const repwd = document.getElementById("inputplace5");
const signup_Button = document.getElementById("signup_button");
function inputinfo() {
  if (
    Name.value !== "" &&
    nickname.value !== "" &&
    email.value !== "" &&
    pwd.value !== "" &&
    repwd.value !== "" &&
    pwd.value == repwd.value &&
    pwd.value.length >= 8 &&
    /[A-Za-z]/.test(pwd.value) &&
    /[0-9]/.test(pwd.value)
  ) {
    signup_Button.style.backgroundColor = "red";
  }
}
Name.addEventListener("input", inputinfo);
nickname.addEventListener("input", inputinfo);
email.addEventListener("input", inputinfo);
pwd.addEventListener("input", inputinfo);
repwd.addEventListener("input", inputinfo);
