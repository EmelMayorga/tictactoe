const divs = document.getElementsByClassName("div");
const players = document.getElementById("players")
const resultado = document.getElementById("resultado");
const banana = document.getElementById("banana");
const coco = document.getElementById("coco")
const btnR = document.getElementById ("reload")
const btnN = document.getElementById("newG")


//localStorage
let contadorB = (localStorage.getItem("bananas"))||[]
let contadorC = (localStorage.getItem("coconuts"))||[]

let marcadorB = contadorB
let marcadorC = contadorC

banana.innerHTML=marcadorB;
coco.innerHTML=marcadorC



//Evento de un jugador vs la maquina.
//Se validan los espacios y no se sobreescrib
for (let index = 0; index < divs.length; index++) {
    divs[index].addEventListener("click", function () {
        divs[index].innerHTML="🍌";
        divs[index].style.pointerEvents= "none";
        divs[index].style.backgroundColor="#c7ad43"

        let camVacios = [];
        for (let index = 0; index < divs.length; index++) {
            if (divs[index].textContent==="") {
               camVacios.push(index);
            }
        }

        let numAleatorio2 = Math.floor(Math.random()*camVacios.length);
        let celdaVacia = camVacios[numAleatorio2];
        setTimeout(() => {
            divs[celdaVacia].innerHTML="🥥"; 
            divs[celdaVacia].style.backgroundColor="#d1cdcd"      
    
        }, 1000);


//Combinaciones para las victorias de las bananas
        if (divs[0].textContent === "🍌" && divs[1].textContent === "🍌" && divs[2].textContent === "🍌") {
            marcadorB ++
            resultado.innerText="Donkey Kong wins"
        } else {
            if (divs[0].textContent === "🍌" && divs[3].textContent === "🍌" && divs[6].textContent === "🍌") {
                marcadorB ++
                resultado.innerText="Donkey Kong wins"
            } else {
                if (divs[0].textContent === "🍌" && divs[4].textContent === "🍌" && divs[8].textContent === "🍌") {
                    marcadorB ++
                    resultado.innerText="Donkey Kong wins"
            } else {
            if (divs[1].textContent === "🍌" && divs[4].textContent === "🍌" && divs[7].textContent === "🍌") {
                marcadorB ++
                resultado.innerText="Donkey Kong wins"
            } else {
            if (divs[2].textContent === "🍌" && divs[4].textContent === "🍌" && divs[6].textContent === "🍌") {
                marcadorB ++
                resultado.innerText="Donkey Kong wins"
            } else {
            if (divs[2].textContent === "🍌" && divs[5].textContent === "🍌" && divs[8].textContent === "🍌") {
                marcadorB ++
                resultado.innerText="Donkey Kong wins"
            } else {
            if (divs[3].textContent === "🍌" && divs[4].textContent === "🍌" && divs[5].textContent === "🍌") {
                marcadorB ++
                resultado.innerText="Donkey Kong wins"
            } else {
            if (divs[6].textContent === "🍌" && divs[7].textContent === "🍌" && divs[8].textContent === "🍌") { 
                marcadorB ++
                resultado.innerText="Donkey Kong wins"
            }}}}}}}}
            localStorage.setItem("bananas", marcadorB);

//Combinaciones para las victorias de los cocos
if (divs[0].textContent === "🥥" && divs[1].textContent === "🥥" && divs[2].textContent === "🥥") {
    marcadorC ++
    resultado.innerText="DK Junior wins"
} else {
    if (divs[0].textContent === "🥥" && divs[3].textContent === "🥥" && divs[6].textContent === "🥥") {
        marcadorC ++
        resultado.innerText="DK Junior wins"
    } else {
        if (divs[0].textContent === "🥥" && divs[4].textContent === "🥥" && divs[8].textContent === "🥥") {
            marcadorC ++
            resultado.innerText="DK Junior wins"
    } else {
    if (divs[1].textContent === "🥥" && divs[4].textContent === "🥥" && divs[7].textContent === "🥥") {
        marcadorC ++
        resultado.innerText="DK Junior wins"
    } else {
    if (divs[2].textContent === "🥥" && divs[4].textContent === "🥥" && divs[6].textContent === "🥥") {
        marcadorC ++
        resultado.innerText="DK Junior wins"
    } else {
    if (divs[2].textContent === "🥥" && divs[5].textContent === "🥥" && divs[8].textContent === "🥥") {
        marcadorC ++
        resultado.innerText="DK Junior wins"
    } else {
    if (divs[3].textContent === "🥥" && divs[4].textContent === "🥥" && divs[5].textContent === "🥥") {
        marcadorC ++
        resultado.innerText="DK Junior wins"
    } else {
    if (divs[6].textContent === "🥥" && divs[7].textContent === "🥥" && divs[8].textContent === "🥥") { 
        marcadorC ++
        resultado.innerText="DK Junior wins"
    }}}}}}}}

    localStorage.setItem("coconuts", marcadorC)
})}

btnR.addEventListener("click", function () {
    location.reload()
})
btnN.addEventListener("click", function () {
    localStorage.clear()
    location.reload()
})
