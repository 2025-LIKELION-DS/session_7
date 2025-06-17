document.getElementById("question").addEventListener("click", () => {
    const checkbox = document.getElementById("question");
    const questionBox = document.getElementById("questionbox");
    const questionContainer = document.getElementById("questioncontainer");

    if (checkbox.checked) {
        questionContainer.style.display = "block";
        // questionBox.style.backgroundColor = "#05BCBC"; 체크박스랑 글자색의 배경색이 바뀌는..
        questionBox.style.color = "#05BCBC";
    } else {
        // 질문 체크 해제됨 → 다시 숨기고 색 초기화
        questionContainer.style.display = "none";
        questionBox.style.backgroundColor = "";
        questionBox.style.color = "";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const writeIcon  = document.getElementById('writeIcon');
    const postContainer  = document.querySelector('.post-container');

    writeIcon.addEventListener('click', () => {
        if (postContainer) {
            postContainer.style.display = 'block';
            postContainer.style.visibility = 'visible';
        }
    });
});


