const container = document.getElementById("first-container");
const box = document.getElementsByClassName("title") ;
const game = document.getElementsByClassName("game");
const inputName = document.querySelector(".input-name")
const  button = document.getElementsByClassName("btn");
const loginBtn = document.querySelector(".btn-01")
const main = document.getElementById("main--container");
const fixs = document.getElementsByClassName ("main");
const middle = document.getElementsByClassName("middle") ;
const playerName= document.querySelector(".player-name")


loginBtn.addEventListener("click",()=>{


    if(inputName.value === ""){
        alert("zehmet olmasa ad girin")
    }else{
        container.style.display = "none"
        main.style.display= "block"
    }

    playerName.textContent = inputName.value
})


