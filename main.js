const formElement = document.querySelectorAll(".form-element");
let randomMessage = document.querySelector(".some-random-message");
const closeRandom = document.querySelector(".some-random-message > span");
const lifa = document.querySelector(".lifa-bilh-new");
let mamlet = 0;

for(let i = 0; i<formElement.length; i++){
    formElement[i].addEventListener("input", (e) =>{
        randomMessage.children[1].innerHTML = `yasgebut key ${e.data}`;
        randomMessage.style.display = "grid"; 
        closeRandom.style.color = "black";
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
    randomMessage.style.display = "grid";
    mamlet = 0;
});