const pen = document.querySelector(".pencil-icon");
const newPost = document.querySelector(".newwrite-box");
const postForm = document.querySelector(".write-box");

pen.addEventListener("click", function () {
  newPost.style.display = "none";

  postForm.style.display = "block";
});

const questionClick = document.querySelector(".checkbox-personal input");
const guideBox = document.querySelector(".checkbox-section");

questionClick.addEventListener("change", function () {
  if (questionClick.checked) {
    guideBox.style.display = "block";
  } else {
    guideBox.style.display = "none";
  }
});
