const check = document.getElementById("que");
const notice = document.getElementById("questionNotice");
const quechecked = document.getElementById("quechecked");

const anony = document.getElementById("anony");
const anonychecked = document.getElementById("ickchecked");
check.addEventListener("change", () => {
  if (check.checked) {
    notice.style.display = "block";
    quechecked.style.color = "rgb(19, 161, 161)";
  } else {
    notice.style.display = "none";
    quechecked.style.color = "gray";
  }
});
anony.addEventListener("change", () => {
  if (anony.checked) {
    anonychecked.style.color = "red";
  } else{
    anonychecked.style.color = "gray";
  }
});
