const btns = document.querySelectorAll(".btn");
const para = document.querySelector("p");

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const btnText = event.target.textContent;
        para.textContent = btnText;
    });
});