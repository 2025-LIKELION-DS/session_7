const pen = document.getElementById("pen_icon");
const newPost = document.getElementById("new_post");
const que = document.getElementById("que");
const post = document.getElementById("post");

pen.addEventListener("click", () => {
  if (1) {
    post.style.display = "block";
    newPost.style.display = "none";
  } else {
    post.style.display = "none";
    newPost.style.display = "block";
  }
});
