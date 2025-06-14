const id = document.getElementById("id");
const password = document.getElementById("password");
const login_btn = document.getElementById("login_btn");

function check_idpw() {
  const IDlength = id.value.length;
  const pwlength = password.value.length;

  if (IDlength >= 1 && pwlength >= 8) {
    login_btn.classList.add("active");
  } else {
    login_btn.classList.remove("active");
  }
}

id.addEventListener("input", check_idpw);
password.addEventListener("input", check_idpw);
