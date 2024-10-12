// Get the modal
let modal = document.getElementById("modalRules");

let rules = document.querySelector(".rules");

let close = document.getElementsByClassName("close")[0];

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

