const id = document.getElementById("id");
const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const ok_btn = document.getElementById("ok_btn");

function check() {
  const idlength = id.value.length;
  const nicknamelength = nickname.value.length;
  const passwordlength = password.value.length;
  const emailValue = email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (idlength >= 1 && nicknamelength >= 1 && passwordlength >= 8) {
    if (password.value === repassword.value && emailRegex.test(emailValue)) {
      ok_btn.classList.add("active");
    } else {
      ok_btn.classList.remove("active");
    }
  } else {
    ok_btn.classList.remove("active");
  }
}

[id, nickname, email, password, repassword].forEach((el) => {
  el.addEventListener("input", check);
});
