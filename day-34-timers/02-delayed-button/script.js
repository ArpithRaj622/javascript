const btn = document.querySelector("button");
const para = document.querySelector("p");

function finished() {
    btn.textContent = "Done";
    para.textContent = "Finished!"
}

btn.addEventListener("click", () => {
    btn.textContent = "waiting...";
    setTimeout(finished, 3000);
});