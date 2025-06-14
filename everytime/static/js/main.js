document.querySelector(".new").addEventListener("click", () => {
  const postCt = document.getElementById("postCt");
  

    if (
      postCt.style.display === "block" 
    ) {
        postCt.style.display = "none";
    } else {
      postCt.style.display = "block";
    }
  });

  //가이드 메시지
  document.getElementById("questionCheck").addEventListener("click", () => {
    const postGuide = document.getElementById("postGuide");
    const guideMessage = document.getElementById("guideMessage");

    if (
      postGuide.style.display === "block" &&
      guideMessage.style.display === "block"
    ) {
      postGuide.style.display = "none";
      guideMessage.style.display = "none";
    } else {
      postGuide.style.display = "block";
      guideMessage.style.display = "block";
    }
  });

  
window.onload = function(){
  document.getElementById("mess").addEventListener("click", () => {
    const modal = document.getElementById("modal");

        if (
      modal.style.display === "block" 
    ) {
        modal.style.display = "none";
    } else {
      modal.style.display = "block";
    }
  })

  document.getElementById("del").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none"
  })
}


  /*
  const checkbox = document.getElementById("questionCheck");
  const guide = document.getElementById("guideMessage");

  if (checkbox && guide) {
    checkbox.addEventListener("change", () => {
      guide.style.display = checkbox.checked ? "block" : "none";
    });
  }
    */
