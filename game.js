let modal = document.getElementById("modalRules");
let rules = document.querySelector(".rules");
let close = document.getElementsByClassName("close")[0];

let buttons = document.querySelectorAll(".handshape");

let gameGridContainer = document.querySelector(".gameGridContainer")
let resultContainer = document.querySelector(".resultOfGame");
const computer = document.getElementById("computer");
const choice = ["rock" , "paper" , "scissors"];
const computerChoice = choice[Math.floor(Math.random() * choice.length)]; 

rules.addEventListener("click", () => {
    modal.style.display = "block";
    modal.style.animationName = "moveModalOpen";
    modal.style.animationDuration = "1s";
});

close.addEventListener("click", () => {

    modal.style.animationName = "moveModalClose";
    modal.style.animationDuration = "1s";
    modal.style.display = "none";
});

buttons.forEach(handShape => {
   
    handShape.addEventListener("click" , (e)=> {
        console.log(handShape);
        // console.log(e.target.alt);
        if (handShape.classList.contains('Paper')) {
            gameGridContainer.classList.add('active')
            resultContainer.classList.add('click')
        }
       
    
    })
});


