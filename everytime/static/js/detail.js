const goodbth = document.getElementById("button_detail1");
const starbtn = document.getElementById("button_detail2");
const goodNum = document.querySelector(".textcolor_red");
const starNum = document.querySelector(".textcolor_yellow");
const scrap = document.getElementById("scrap_text");
const starimg = document.getElementById("starimg");
let clickCount=0;
let goodBtn_click =0;

goodbth.addEventListener("click", function () {
  goodBtn_click++;

  if (goodBtn_click < 2) {
    let currentNum = Number(goodNum.textContent);
    goodNum.textContent = currentNum + 1;

  }
});


starbtn.addEventListener("click", function () {
  clickCount++;
  let star_currentnum = Number(starNum.textContent);

  if (clickCount % 2 === 1) {
    starNum.textContent = star_currentnum + 1;
    scrap.textContent = "스크랩 취소";
    starimg.style.display = "none";
  } else {
    starNum.textContent = star_currentnum - 1;
    starimg.style.display = "inline-block";
    scrap.textContent = "스크랩";
  }

  starcount.textContent = star_currentnum;



});

const write = document.getElementById("double_text");
const double_text = document.querySelector(".double_plus_text");

double_text.addEventListener("click", function () {
  write.style.display = "block";
});

const input_context = document.querySelector(".d2");
const writebtn = document.querySelector(".plus_submit_button");

writebtn.addEventListener("click", function () {
  let input_text = input_context.value;
  alert(input_text);
});
const input_context1 = document.querySelector(".d");

const write_text = document.querySelector(".submit_button");

write_text.addEventListener("click", function () {
  let input_text1 = input_context1.value;
  alert(input_text1);
});