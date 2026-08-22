const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const para = document.querySelector("p");

let intervalId;
let i = 0;
para.textContent = i;

function counter() {
    i++;
    para.textContent = i;
}

startBtn.addEventListener("click", () => {
    intervalId = setInterval(counter, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});
