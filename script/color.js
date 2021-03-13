var color1=document.getElementById("color1");
var centent=document.getElementById("centent");
color1.addEventListener("click",()=>{
    centent.style.backgroundColor="cornflowerblue";
    document.body.style.backgroundColor="#1b61de";
    localStorage.setItem("color1","1");
    localStorage.removeItem("color2");
    localStorage.removeItem("color3");
    localStorage.removeItem("color4");
});

var color2=document.getElementById("color2");
color2.addEventListener("click",()=>{
    centent.style.backgroundColor="crimson";
    document.body.style.backgroundColor="#ad1c3d";
    localStorage.setItem("color2","2");
    localStorage.removeItem("color1");
    localStorage.removeItem("color3");
    localStorage.removeItem("color4");
});

var color3=document.getElementById("color3");
color3.addEventListener("click",()=>{
    centent.style.backgroundColor="darkgoldenrod";
    document.body.style.backgroundColor="rgb(167 121 9)";
    localStorage.setItem("color3","3");
    localStorage.removeItem("color1");
    localStorage.removeItem("color2");
    localStorage.removeItem("color4");
});

var color4=document.getElementById("color4");
color4.addEventListener("click",()=>{
    centent.style.backgroundColor="darkmagenta";
    document.body.style.backgroundColor="#6a0284";
    localStorage.setItem("color4","4");
    localStorage.removeItem("color1");
    localStorage.removeItem("color2");
    localStorage.removeItem("color3");
});
onload=()=>{
    if(localStorage.getItem("color1")==="1"){
        centent.style.backgroundColor="cornflowerblue";
        document.body.style.backgroundColor="#1b61de";
    }
    else if(localStorage.getItem("color2")==="2"){
        centent.style.backgroundColor="crimson";
        document.body.style.backgroundColor="#ad1c3d";
    }
    else if(localStorage.getItem("color3")==="3"){
        centent.style.backgroundColor="darkgoldenrod";
        document.body.style.backgroundColor="rgb(167 121 9)";
    }
    else if(localStorage.getItem("color4")==="4"){
        centent.style.backgroundColor="darkmagenta";
        document.body.style.backgroundColor="#6a0284";
    }
};