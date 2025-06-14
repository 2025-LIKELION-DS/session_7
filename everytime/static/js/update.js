const question = document.getElementById("question");
const quest = document.getElementById("quest");
const anonymity = document.getElementById("anonymity");
const anony = document.getElementById("anony");
const ment = document.getElementById("question_ment");
const hash = document.getElementById("hash");
const attach = document.getElementById("attach");
const writebtn = document.getElementById("write_btn");

function questionbtn() {
  question.addEventListener("change", () => {
    if (question.checked) {
      quest.style.color = "rgb(0, 189, 189)";
      ment.style.display = "flex";
    } else {
      quest.style.color = "";
      ment.style.display = "none";
    }
  });
}

function anonymitybtn() {
  anonymity.addEventListener("change", () => {
    if (anonymity.checked) {
      anony.style.color = "red";
    } else {
      anony.style.color = "";
    }
  });
}

function clickhashbtn(){
  hash.addEventListener("click", () => {
    document.getElementById("vid_btn").click();})
  };

  function clickattachbtn(){
  attach.addEventListener("click", () => {
    document.getElementById("img_btn").click();})
  };

  function clickuploadbtn(){
  writebtn.addEventListener("click", () => {
    document.getElementById("upload_btn").click();})
  };

questionbtn();
anonymitybtn();
clickhashbtn();
clickattachbtn();
clickuploadbtn();
