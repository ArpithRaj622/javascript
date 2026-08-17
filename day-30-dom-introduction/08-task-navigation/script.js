const nextBtns = document.querySelectorAll("button");

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const nextLi = btn.parentElement.nextElementSibling;

        nextLi.textContent = "Current Task";
    });
});