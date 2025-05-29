let id = document.querySelector("#id");
let pw = document.querySelector("#pw");
let repw = document.querySelector("#repw");
let email = document.querySelector("#email");
let nickname = document.querySelector("#nickname");

let submitButton = document.querySelector("#submitbtn");

function submitButtonChanger() {
  if (pw.value && id.value && repw.value && email.value && nickname.value) {
    if (pw.value.length >= 8 && pw.value == repw.value) {
      submitButton.style.backgroundColor = "red";
    }
  }
}

id.addEventListener("input", submitButtonChanger);
pw.addEventListener("input", submitButtonChanger);
repw.addEventListener("input", submitButtonChanger);
email.addEventListener("input", submitButtonChanger);
nickname.addEventListener("input", submitButtonChanger);
