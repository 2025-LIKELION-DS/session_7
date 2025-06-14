const pen = document.getElementById("pencil");
const inputWrite = document.getElementById("input-write");
const question = document.getElementById("question");
const postInput = document.querySelector(".post_input");


pen.addEventListener("click", () => {
  inputWrite.style.display = "none";
  postInput.style.display = "block";
});

const quecheck = document.getElementById("question");
const questionInfo = document.getElementById("question_info");
const questionText = document.getElementById("question_text");

question.addEventListener("change", () => {
  if (quecheck.checked) {
    questionInfo.style.display = "block";
    questionText.style.color = "#05bcbc"; 
    questionText.style.fontWeight = "bold";

  } else {
    questionInfo.style.display = "none";
    questionText.style.color = ""; 
    questionText.style.fontWeight = ""; 
  }
});