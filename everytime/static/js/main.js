document.addEventListener("DOMContentLoaded", () => {
    const pens = document.querySelectorAll(".pen");
    const container = document.getElementById("writeContainer");
    const info = document.querySelectorAll(".info");
    const info_box = document.querySelector(".info_box");
    

    info.forEach(el => {
        el.addEventListener("click", () => {
            if (info_box) {
                info_box.style.display = "block";
            } else {
                console.warn("info_box가 없습니다!");
            }
        });
    });


    pens.forEach(pen => {
        pen.addEventListener("click", () => {
            const writeBox = pen.closest(".write");
            if (writeBox) {
                writeBox.remove();
            }

            fetch('/post/secret/')
                .then(res => res.text())
                .then(html => { 
                    container.innerHTML = html;
                    
                    container.style.display = "block";
                    const qCheckbox = container.querySelector("#question");
                    const qBox = container.querySelector("#Qbox");

                    if (qCheckbox && qBox) {
                        qCheckbox.addEventListener("change", () => {
                            qBox.style.display = qCheckbox.checked ? "block" : "none";
                        });
                    }

                })
                .catch(err => {
                    console.error("글쓰기 폼 불러오기 실패:", err);
                });
        });
    });
});
