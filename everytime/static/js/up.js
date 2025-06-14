  //가이드 메시지
  document.getElementById("qC").addEventListener("click", () => {
    const pG = document.getElementById("pG");
    const gM = document.getElementById("gM");

    if (
      pG.style.display === "block" &&
      gM.style.display === "block"
    ) {
      pG.style.display = "none";
      gM.style.display = "none";
    } else {
      pG.style.display = "block";
      gM.style.display = "block";
    }
  });