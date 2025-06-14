const comments = document.querySelector(".comments");
let openComComment = null;

comments.addEventListener("click", (e) => {
  const comComBtn = e.target.closest(".com-com-btn");
  if (comComBtn) {
    const comment = comComBtn.closest(".comment");
    const comComment = comment?.querySelector(".com-comment");
    if (comComment) {
      if (openComComment === comComment) {
        comComment.classList.add("hidden");
        openComComment = null;
      } else {
        if (openComComment) {
          openComComment.classList.add("hidden");
        }
        comComment.classList.remove("hidden");
        openComComment = comComment;
      }
    }
  }

  const comCommentSubmit = e.target.closest(".com-comment-submit");
  if (comCommentSubmit) {
    e.preventDefault();
    const comment = comCommentSubmit.closest(".comment");
    const comCommentInput = comment?.querySelector(".com-comment-input");
    const value = comCommentInput.value.trim();
    if (value) {
      alert(value);
      comCommentInput.value = "";
    } else {
      alert("내용을 입력해 주세요.");
    }
  }
});
