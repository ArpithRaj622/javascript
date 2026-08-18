const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const taskText = btn.previousElementSibling;
    taskText.classList.toggle("hide");
    if (btn.textContent === "hide") {
        btn.textContent = "show";
    } else {
        btn.textContent = "hide";
    }
});