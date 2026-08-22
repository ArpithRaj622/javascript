const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const showCount = document.querySelector(".count");
const showMessage = document.querySelector(".message");


let i = 5;
showCount.textContent = 5;
showMessage.textContent = "Ready";

let intervalId = null;

function reverseCount() {
    if (i > 0) {
        i--;
        showCount.textContent = i;
    }
    if (i === 0) {
        showMessage.textContent = "Time's up";
        clearInterval(intervalId);
        intervalId = null;
    }
}

startBtn.addEventListener("click", () => {
    if (intervalId === null) {
        intervalId = setInterval(reverseCount, 1000);
    }
    showMessage.textContent = "Ready";
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    showMessage.textContent = "Paused";
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    i = 5;
    showCount.textContent = i;
    showMessage.textContent = "Ready";
});
