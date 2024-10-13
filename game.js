let modal = document.getElementById("modalRules");
let rules = document.querySelector(".rules");
let close = document.getElementsByClassName("close")[0];

let buttons = document.querySelectorAll(".handshape");

let gameGridContainer = document.querySelector(".gameGridContainer")
let resultContainer = document.querySelector(".resultOfGame");
const you = document.querySelector(".you");

const youImg = document.querySelector(".you img");
const computer = document.getElementById("computer");
const choice = ["rock", "paper", "scissors"];
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

    handShape.addEventListener("click", (e) => {
         console.log(handShape);
        // console.log(e.target.alt);
        if (handShape.classList.contains('paper')) {
            youImg.src = "images/icon-paper.svg";
            you.style.border ="40px solid rgb(82, 85, 255)";
            you.style.boxShadow = "0 10px #180d92, inset 0 10px #cad5d6";
            gameGridContainer.classList.add('active')
            resultContainer.classList.add('click')
        }else if(handShape.classList.contains('rock')){
            youImg.src = "images/icon-rock.svg";
            you.style.border ="40px solid rgb(233, 45, 76)";
            you.style.boxShadow = "0 10px #a90f2b, inset 0 10px #cad5d6";
            gameGridContainer.classList.add('active')
            resultContainer.classList.add('click')
        }else{
            youImg.src = "images/icon-scissors.svg";
            you.style.border ="40px solid rgb(233, 202, 45)";
            you.style.boxShadow = "0 10px #a9920f, inset 0 10px #cad5d6";
            gameGridContainer.classList.add('active')
            resultContainer.classList.add('click')
        }


    })
});


function housePicked(){
    switch(computerChoice){
        case "rock":
            computer.innerHTML = '<img src="images/icon-rock.svg" alt="rock">'; 
            // computer.style.backgroundColor = "white";
            // computer.style.border = "40px solid rgb(233, 45, 76)";
            // computer.style.boxShadow = "0 10px #a90f2b, inset 0 10px #cad5d6";

            break;

        case "paper":
            computer.innerHTML = '<img src="images/icon-paper.svg" alt="rock">'; 
            // computer.style.backgroundColor = "white";
            // computer.style.border = "40px solid rgb(82, 85, 255)";
            // computer.style.boxShadow = "0 10px #180d92, inset 0 10px #cad5d6";


            break;

        case "scissors":
            computer.innerHTML = '<img src="images/icon-scissors.svg" alt="scissors">';
            computer.style.backgroundColor = "white";
            computer.style.border = " 40px solid rgb(233, 202, 45)";
            computer.style.boxShadow = " 0 10px #a9920f, inset 0 10px #cad5d6";

 
        break;    
    }
}

housePicked();



