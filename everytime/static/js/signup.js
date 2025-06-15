document.addEventListener("DOMContentLoaded", function () {
    let B = document.getElementsByClassName("join-bt")[0];
    let pw = document.getElementById("user-pw");
    let nam = document.getElementById("user-name");
    let nickname = document.getElementById("user-nickname");
    let email = document.getElementById("user-email");
    let pwc = document.getElementById("user-pwcheck");


    function Changecolor(){
        if (pw.value.length >=8 && nickname.value.length>0 && email.value.length>0 && nam.value.length>0&&pw.value===pwc.value){
            B.style.backgroundColor = "red";
        }
        else{
            B.style.backgroundColor = "";
        }
    }


pw.addEventListener("input",Changecolor);
nam.addEventListener("input",Changecolor);
nickname.addEventListener("input",Changecolor);
pwc.addEventListener("input",Changecolor);
email.addEventListener("input",Changecolor);
console.log(document.getElementById("user-pw"));
});
