let count = 0;

const likeBtn = document.querySelector(".agreeBtn");
const likeCount = document.querySelector(".likes");

function agreelikeBtn() {
  count++;
  likeCount.textContent = count;

  likeBtn.removeEventListener("click", agreelikeBtn);
}

likeBtn.addEventListener("click", agreelikeBtn);

let scrapcount = 0;
const scrapBtn = document.querySelector(".scrapBtn");
const scrapCount = document.querySelector(".scrap");
const scrapText = scrapBtn.querySelector(".scrap-box");

function scraprecordBtn() {
  count++;
  scrapCount.textContent = scrapcount;

  scrapBtn.removeEventListener("click", scraprecordBtn);
}

scrapBtn.addEventListener("click", scraprecordBtn);

let Scrapped = false;

scrapBtn.addEventListener("click", function () {
  let current = parseInt(scrapCount.textContent);

  if (Scrapped === false) {
    scrapCount.textContent = current + 1;
    scrapText.textContent = "스크랩 취소";
    Scrapped = true;
  } else {
    scrapCount.textContent = current - 1;
    scrapText.textContent = "스크랩";
    Scrapped = false;
  }
});

const replyBtn = document.querySelector(".user-comments-detail a");
const replyBox = document.querySelector(".tail-comments");

replyBtn.addEventListener("click", function () {
  replyBox.style.display = "flex";

  const completeBtn = document.querySelector(".complete-write");
  const tailcontent = document.querySelector(".textwriter");

  completeBtn.addEventListener("click", function () {
    const content = tailcontent.value.trim();

    if (content === "") {
      alert("대댓글을 입력해주세요.");
    } else {
      alert(content);
    }
  });
});

const completeBtns = document.querySelectorAll(
  ".tail-comments .complete-write"
);
completeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const input = this.closest(".tail-comments").querySelector("input");
    const reply = input.value.trim();
    if (!reply) {
      alert("대댓글을 입력해주세요.");
      return;
    }

    const newReply = document.createElement("div");
    newReply.classList.add("nested-reply");
    newReply.textContent = `익명: ${reply}`;

    this.closest(".user-comments").appendChild(newReply);
    input.value = "";
  });
});
