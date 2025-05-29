const positive = document.getElementById("likesbox");
const likes = document.getElementById("likes");
const favorites = document.getElementById("scrapbox");
const preference = document.getElementById("preference");
const comments = document.getElementById("comments");

let c_cnt = 1;
let l_cnt = 1;
let p_cnt = 0;

function likesClick() {
  likes.innerText = ++l_cnt;
  positive.removeEventListener("click", likesClick);
}
function preferenceClick() {
  if (favorites.innerText !== "스크랩 취소") {
    favorites.innerText = "스크랩 취소";
    preference.innerText = ++p_cnt;
  } else {
    favorites.innerText = "스크랩";
    preference.innerText = --p_cnt;
  }
}
positive.addEventListener("click", likesClick);
favorites.addEventListener("click", preferenceClick);
//여기까지가 따봉, 즐겨찾기 js (아래부터는 대댓글기능)

const dadat = document.getElementById("cocomment");
const cocomentwindow = document.getElementById("cocoments");
const cocomentContent = document.getElementById("cocommentInput");
const submitCocommentBtn = document.getElementById("submitCocomment");
const newCocomment = document.getElementById("newcocomment");
const cocomentBox = document.getElementById("newcoco");

dadat.addEventListener("click", () => {
  cocomentwindow.style.display = "block";
});

submitCocommentBtn.addEventListener("click", () => {
  const cocomment = cocomentContent.value.trim();
  if (cocomment === "") {
    alert("대댓글을 입력해주세요.");
    return;
  }
  alert("입력한 대댓글 : " + cocomment);
  comments.innerText = ++c_cnt;
  cocomentwindow.style.display = "none";
  newCocomment.innerText = cocomment;
  cocomentBox.style.display = "block";
});

//아래부터는 그냥 댓글기능
const submitCommentBtn = document.getElementById("submitComment");
const commentContent = document.getElementById("commentInput");
const newComment = document.getElementById("newSelfComment");
const commentBox = document.getElementById("newco");

submitCommentBtn.addEventListener("click", () => {
  const comment = commentContent.value.trim();
  if (comment === "") {
    alert("댓글을 입력해주세요.");
    return;
  }
  alert("입력한 댓글 : " + comment);
  comments.innerText = ++c_cnt;
  newComment.innerText = comment;
  commentBox.style.display = "block";
});
