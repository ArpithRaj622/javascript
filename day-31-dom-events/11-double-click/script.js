const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.addEventListener("dblclick", () => {
    para.textContent = "Double click detected!";
});