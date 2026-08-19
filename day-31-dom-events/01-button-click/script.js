const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.addEventListener("click", () => {
    para.textContent = "Notification shown!";
});