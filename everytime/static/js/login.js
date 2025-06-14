const signup = document.getElementsByClassName("submit")[0];
const pw = document.getElementsByClassName("pw")[0];
const id = document.getElementsByClassName("id")[0]; //class 는 배열로 가져와져서 연결하고[0] 적어주기

function changeColor() {
  if (pw.value.length >= 8 && id.value.length > 0) {
    signup.style.backgroundColor = "red";
  } else {
    signup.style.backgroundColor = "";
  }
}

pw.addEventListener("input", changeColor);
