const startBtn = document.querySelector(".start-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const para = document.querySelector("p");
let timerID;

function message() {
    para.textContent = "Completed!";
}

function cancelMessage() {
    para.textContent = "Cancelled!";
}

startBtn.addEventListener("click", () => {
   timerID =  setTimeout(message, 5000);
});

cancelBtn.addEventListener("click", () => {
    clearTimeout(timerID);
    cancelMessage();
});