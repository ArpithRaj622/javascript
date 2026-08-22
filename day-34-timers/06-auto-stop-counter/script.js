const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const para = document.querySelector("p");

let i = 0;
let intervalId = null;
let timeoutId = null;

function startCount() {
    i++;
    para.textContent = i;
}

function stopCount() {
    clearInterval(intervalId);
    intervalId = null;

    clearTimeout(timeoutId);
    timeoutId = null;
}

para.textContent = i;

startBtn.addEventListener("click", () => {
    if (intervalId === null) {
        intervalId = setInterval(startCount, 1000);

        if (timeoutId === null) {
            timeoutId = setTimeout(stopCount, 5000);
        }
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