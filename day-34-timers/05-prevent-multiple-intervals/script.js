const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const para = document.querySelector("p");

let intervalId = null;
let i = 0;
para.textContent = i;

function counter() {
    i++;
    para.textContent = i;
}

startBtn.addEventListener("click", () => {
    if (intervalId === null) {
        intervalId = setInterval(counter, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    i = 0;
    para.textContent = i;
});