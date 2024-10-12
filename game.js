// Get the modal
let modal = document.getElementById("modalRules");

let rules = document.querySelector(".rules");

let close = document.getElementsByClassName("close")[0];

rules.addEventListener("click", () => {
    modal.style.display = "block";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});

