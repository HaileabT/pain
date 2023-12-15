let x=document.querySelectorAll(".send-btn");
let y=document.getElementById("nav-bar");
let z=document.getElementById("main");
let home=document.getElementById("home");
let shity=document.querySelectorAll(".a");
let home_desc=document.getElementById("home-disp");
let back=document.getElementById("x");
for(let i=0;i<x.length;i++)
{
    x[i].onclick=function(){
        y.style.top="300px";
        z.style.top="0px";
    }
}


for(let i=0;i<shity.length;i++)
{
    shity[i].addEventListener("click", (event)=>{
        event.preventDefault();
        home_desc.style.display="block";
    })
}

back.onclick=function(){
    home_desc.style.display="none";
}