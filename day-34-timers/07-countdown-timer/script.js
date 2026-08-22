const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const para = document.querySelector("p");

let i = 10;
para.textContent = i;

let intervalId = null;

function reverseCount() {
    if (i > 0) {
        i--;
        para.textContent = i;
    }
}

startBtn.addEventListener("click", () => {
    if (intervalId === null) {
        intervalId = setInterval(reverseCount, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    i = 10;
    para.textContent = i;
});