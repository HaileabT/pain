const formElement = document.querySelectorAll(".form-element");
let randomMessage = document.querySelector(".some-random-message");
const closeRandom = document.querySelector(".some-random-message > span");
const lifa = document.querySelector(".lifa-bilh-new");
const notInRange = document.querySelectorAll(".not-in-range");
const main = document.querySelector(".page-main");
const links = document.getElementsByTagName("a");
let mamlet = 0;
const observer = new IntersectionObserver(elements => {
    elements.forEach((element) =>{
        if (element.isIntersecting){
            element.target.classList.add('come');
        }
        else{
            element.target.classList.remove('come');
        }
    })
    
})
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
for(let i = 0; i< links.length; i++){
    links[i].addEventListener("click", (e) =>{
        e.preventDefault();
    })
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


notInRange.forEach((element) => observer.observe(element));

notInRange.forEach((element) =>{
    element.addEventListener("animationend", () =>{
        element.classList.remove("come");
    })
})

notInRange.forEach( element => element.addEventListener("click", () => {
    if(element.classList.contains("come")){
        randomMessage.children[0].setAttribute('src', 'stob.jpg');
        randomMessage.children[1].innerHTML = `Animationu Yileq qoy`;
        closeRandom.style.color = "white";
        randomMessage.style.color = "black";
        randomMessage.style.display = "grid";
        mamlet = 0;
    }
}))


for(let i = 0; i<formElement.length; i++){
    formElement[i].addEventListener("input", (e) =>{
        randomMessage.children[1].innerHTML = `yasgebut key ${e.data}`;
        randomMessage.style.display = "grid"; 
        closeRandom.style.color = "black";
        randomMessage.style.animation = "none";
        randomMessage.children[0].setAttribute('src', 'cheguara.jpg');
        formElement[i].disabled = true;
        mamlet = 0;
    })
}
closeRandom.addEventListener("mouseenter", () =>{
    let x = Math.floor(Math.random()*200)+20;
    let y = Math.floor(Math.random()*200)+20;
    if (mamlet <= 3){
        closeRandom.style.top = `${y}px`;
        closeRandom.style.right = `${x}px`;
    }
    else{

    }
    mamlet++;
})
closeRandom.addEventListener("click", () =>{
    randomMessage.style.display = "none";
    for(let i = 0; i<formElement.length; i++)
    {
        formElement[i].disabled = false;
    }
});

lifa.addEventListener("click", () =>{
    randomMessage.children[0].setAttribute('src', 'gosh.jpg');
    randomMessage.children[1].innerHTML = `Gobez lij`;
    closeRandom.style.color = "white";
    randomMessage.style.display = "grid";
    randomMessage.style.animation = "none";
    mamlet = 0;
});
