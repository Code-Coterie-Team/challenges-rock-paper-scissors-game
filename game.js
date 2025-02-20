let modal = document.getElementById("modalRules");
let btnRules = document.querySelector(".rules");
let btnClose = document.getElementsByClassName("close")[0];

let handshape = document.querySelectorAll(".handshape");
let gameGridContainer = document.querySelector(".gameGridContainer");
let resultContainer = document.querySelector(".resultOfGame");

const you = document.querySelector(".you");

const footer = document.querySelector(".footer");

const youImg = document.querySelector(".you img");
let showSelectYou = document.querySelector(".showSelectYou");
let theHousePicked = document.querySelector(".theHousePicked");

const computer = document.getElementById("computer");

const btnPlayAgain = document.querySelector(".playAgain");

const resultPart = document.querySelector(".result");

const announcingResult = document.querySelector(".announcingResult");
const scoreNumber = document.querySelector(".scorenumber");

const choice = ["rock", "paper", "scissors"];
let computerChoice = "";
let getAlt = "";
let dataResult = "";
let score = 0;

btnRules.addEventListener("click", () => {
  modal.style.display = "block";
  modal.style.animationName = "moveModalOpen";
  modal.style.animationDuration = "1s";
});

btnClose.addEventListener("click", () => {
  modal.style.animationName = "moveModalClose";
  modal.style.animationDuration = "1s";
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
});

handshape.forEach((handShape) => {
  handShape.addEventListener("click", (e) => {
    computerChoice = choice[Math.floor(Math.random() * choice.length)];

    if (handShape.classList.contains("paper")) {
      you.classList.add("animationshowYou");
      youImg.src = "images/icon-paper.svg";
      youImg.setAttribute("alt", "paper");
      you.style.border = "40px solid rgb(82, 85, 255)";
      you.style.boxShadow = "0 10px #180d92, inset 0 10px #cad5d6";
    } else if (handShape.classList.contains("rock")) {
      you.classList.add("animationshowYou");
      youImg.src = "images/icon-rock.svg";
      youImg.setAttribute("alt", "rock");
      you.style.border = "40px solid rgb(233, 45, 76)";
      you.style.boxShadow = "0 10px #a90f2b, inset 0 10px #cad5d6";
    } else {
      you.classList.add("animationshowYou");
      youImg.src = "images/icon-scissors.svg";
      youImg.setAttribute("alt", "scissors");
      you.style.border = "40px solid rgb(233, 202, 45)";
      you.style.boxShadow = "0 10px #a9920f, inset 0 10px #cad5d6";
    }
    setTimeout(() => {
      theHousePicked.style.display = "flex";
      housePicked(computerChoice);
    }, 500);
    setTimeout(() => {
      resultPart.style.display = "flex";
      resultPart.classList.add("animationResult");
      if (dataResult == "youWin") {
        you.style.boxShadow +=
          ", 0 0 0 70px #1f3156, 0 0 0 130px #1f315680, 0 0 0 200px #1f315640";
        you.style.transition = "box-shadow 2s";
      }
    }, 2000);

    gameGridContainer.classList.add("active");
    resultContainer.classList.add("click");
    footer.style.display = "none";
    getAlt = youImg.alt;
    dataResult = determinTheWinner();
  });
});

btnPlayAgain.addEventListener("click", () => {
  gameGridContainer.classList.remove("active");
  resultContainer.classList.remove("click");
  footer.style.display = "flex";
  resultPart.style.display = "none";
  you.classList.remove("animationshowYou");
  resultPart.classList.remove("animationResult");
  removeHousePicked();
});
function housePicked(computerChoiceData) {
  switch (computerChoiceData) {
    case "rock":
      setTimeout(() => {
        computer.innerHTML = '<img src="images/icon-rock.svg" alt="rock">';
        computer.style.backgroundColor = "white";
        computer.style.border = "40px solid rgb(233, 45, 76)";
        computer.style.boxShadow = "0 10px #a90f2b, inset 0 10px #cad5d6";
        computer.classList.add("animate");

        if (dataResult == "youLost") {
          computer.style.boxShadow +=
            ", 0 0 0 70px #1f3156, 0 0 0 130px #1f315680, 0 0 0 200px #1f315640";
          computer.style.transition = "box-shadow 2s";
        }
      }, 1000);
      break;
    case "paper":
      setTimeout(() => {
        computer.innerHTML = '<img src="images/icon-paper.svg" alt="paper">';
        computer.style.backgroundColor = "white";
        computer.style.border = "40px solid rgb(82, 85, 255)";
        computer.style.boxShadow = "0 10px #180d92, inset 0 10px #cad5d6";
        computer.classList.add("animate");

        if (dataResult == "youLost") {
          computer.style.boxShadow +=
            ", 0 0 0 70px #1f3156, 0 0 0 130px #1f315680, 0 0 0 200px #1f315640";
          computer.style.transition = "box-shadow 2s";
        }
      }, 1000);

      break;

    case "scissors":
      setTimeout(() => {
        computer.innerHTML =
          '<img src="images/icon-scissors.svg" alt="scissors">';
        computer.style.backgroundColor = "white";
        computer.style.border = " 40px solid rgb(233, 202, 45)";
        computer.style.boxShadow = " 0 10px #a9920f, inset 0 10px #cad5d6";
        computer.classList.add("animate");

        if (dataResult == "youLost") {
          computer.style.boxShadow +=
            ", 0 0 0 70px #1f3156, 0 0 0 130px #1f315680, 0 0 0 200px #1f315640";
          computer.style.transition = "box-shadow 2s";
        }
      }, 1000);
      break;
  }
}

function removeHousePicked() {
  computer.innerHTML = '<img src="" alt="">';
  computer.style.backgroundColor = "#041331";
  computer.style.border = " 40px solid #041331";
  computer.style.boxShadow = " 0 10px #041331, inset 0 10px #041331";
  computer.classList.remove("animate");
  computer.style.transition = "none";
}

function determinTheWinner() {
  if (getAlt === computerChoice) {
    announcingResult.innerHTML = "YOU DRAW";
    return "youDraw";
  } else if (
    (getAlt === "paper" && computerChoice === "rock") ||
    (getAlt === "rock" && computerChoice === "scissors") ||
    (getAlt === "scissors" && computerChoice === "paper")
  ) {
    announcingResult.innerHTML = "YOU WIN";
    setTimeout(() => {
      ++score;
      scoreNumber.innerHTML = score;
    }, 2000);
    return "youWin";
  } else {
    announcingResult.innerHTML = "YOU LOSE";
    return "youLost";
  }
}
