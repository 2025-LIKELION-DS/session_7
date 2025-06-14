const posvote = document.getElementById("posvote");
const scrap = document.getElementById("scrap");
const posnum = document.getElementById("posnum");
const scrapnum = document.getElementById("scrapnum");
const reply = document.getElementById("reply");
const reply_write = document.getElementById("com_reply_write");
const text_input2 = document.getElementById("text_input2");
const text_input1 = document.getElementById("text_input");
const com_btn = document.querySelector(".com-write-button");
const com_btn1 = document.querySelector(".com-write-button1");
const modal=document.getElementById("modal");
const modalimg = document.getElementById("account");
const closeBtn = document.querySelector(".close");

let poscount = 12;
let scrapcount = 12;

let isliked = false;
let isscrapped = false;
let isreply = false;

function likebtn() {
  posvote.addEventListener("click", () => {
    if (!isliked) {
      poscount++;
      isliked = true;
      posvote.style.color = "red";
      posvote.innerHTML =
        '<img src="../img/container.articles.vote.png" width="12px" height="12px" style="display:flex; align-items:center; justify-content:center; margin-right:4px;" /> <b>공감</b>';
    } else {
      poscount--;
      isliked = false;
      posvote.style.color = "";
      posvote.innerHTML =
        '<img src="../img/container.articles.buttons.posvote.png" width="12px" height="12px" style="display:flex; align-items:center; justify-content:center; margin-right:4px;" /> <b>공감</b>';
    }
    posnum.innerText = poscount;
  });
}

function scrapbtn() {
  scrap.addEventListener("click", () => {
    if (!isscrapped) {
      scrap.innerHTML = "<b>스크랩 취소</b>";
      scrapcount++;
      isscrapped = true;
    } else {
      scrap.innerHTML =
        '<img src="../img/container.articles.buttons.scrap.png" width="12px" height="12px" style="display:flex; align-items:center; justify-content:center; margin-right:4px;" /> <b>스크랩</b>';
      scrapcount--;
      isscrapped = false;
    }
    scrapnum.innerText = scrapcount;
  });
}

function replybtn() {
  reply.addEventListener("click", () => {
    reply_write.style.display = "flex";
  });
}

function combtn2() {
  com_btn.addEventListener("click", () => {
    const comment2 = text_input2.value;
    alert(comment2);
  });
}

function combtn1() {
  com_btn1.addEventListener("click", () => {
    const comment1 = text_input1.value;
    alert(comment1);
  });
}
  function clickmodalbtn(){
  modalimg.addEventListener("click", () => {
    modal.style.display = "block";})
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };


clickmodalbtn()
likebtn();
scrapbtn();
replybtn();
combtn2();
combtn1();
