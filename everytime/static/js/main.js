
  const newpostbtn = document.getElementById("new-write");
  const postcontainer = document.getElementById("poststyle");
  const modal=document.getElementById("modal");
  const modalimg = document.getElementById("account");
  const closeBtn = document.querySelector(".close");

  newpostbtn.addEventListener("click", () => {
    postcontainer.style.display = "block";
  });

  function clickmodalbtn(){
  modalimg.addEventListener("click", () => {
    modal.style.display = "block";})
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };



  clickmodalbtn()
