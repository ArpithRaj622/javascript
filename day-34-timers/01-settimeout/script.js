const btn = document.querySelector("button");
const para = document.querySelector("p");

function changeText() {
    para.textContent = "Message appeared!";
}

btn.addEventListener("click", () => {
    setTimeout(changeText, 2000);
});
