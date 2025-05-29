let id = document.querySelector("#id");
let pw = document.querySelector("#pw");
let submitButton = document.querySelector("#submitbtn");

function submitButtonChanger() {
  if (pw.value && id.value) {
    if (pw.value.length >= 8) submitButton.style.backgroundColor = "red";
  }
}

id.addEventListener("input", submitButtonChanger);
pw.addEventListener("input", submitButtonChanger);
