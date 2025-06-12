const question = document.getElementById("question");
const qInfo = document.querySelector(".q-info-container");

function toggleQInfo() {
  qInfo.classList.toggle("hidden");
}

question.addEventListener("change", toggleQInfo);