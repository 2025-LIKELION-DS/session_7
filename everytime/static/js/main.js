const pencil = document.querySelector(".new_text_img");
const div = document.querySelector(".new_text");
const questionCheckbox = document.querySelector(".check1");
const warning = document.querySelector(".warnning_in_writing");
const post = document.querySelector(".new_post_border");
post.style.display = "none";
let clickCount = 0;
pencil.addEventListener("click", function () {
  div.style.display = "none";
  post.style.display = "block";
});

questionCheckbox.addEventListener("click", function () {
  clickCount++;

    if (clickCount % 2 === 1) {
      warning.style.display = "block";
    } else {
      warning.style.display = "none";
    }

});
