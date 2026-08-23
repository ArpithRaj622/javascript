const btn = document.querySelector("button");
const msg = document.querySelector("p");

function doneMsg() {
    msg.textContent = "Done!";
}

btn.addEventListener("click", () => {
    msg.textContent = "Processing...";
    setTimeout(doneMsg, 2000);
});