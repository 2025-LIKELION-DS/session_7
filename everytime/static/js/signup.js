const nam = document.getElementById("nam");
const nick = document.getElementById("nick");
const ema = document.getElementById("ema");
const pw = document.getElementById("pw");
const repw = document.getElementById("repw");
const signup = document.getElementById("signup");

function changeColor() {
  if (
    pw.value.length >= 8 &&
    nam.value.length > 0 &&
    nick.value.length > 0 &&
    ema.value.length > 0 &&
    pw.value == repw.value
  ) {
    signup.style.backgroundColor = "red";
  } else {
    signup.style.backgroundColor = ""; //되돌리기
  }
}

pw.addEventListener("input", changeColor); //id는 하나하나 다 작성 필요
nam.addEventListener("input", changeColor);
nick.addEventListener("input", changeColor);
ema.addEventListener("input", changeColor);
repw.addEventListener("input", changeColor);
