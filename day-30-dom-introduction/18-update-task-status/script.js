const task = document.querySelector(".task");
const status = document.querySelector(".status");
const completeBtn = document.querySelector(".complete-btn");

completeBtn.addEventListener("click", () => {
    task.classList.toggle("strike");
    if (status.textContent === "pending") {
        status.textContent = "completed";
    } else {
        status.textContent = "pending";
    }
    if (completeBtn.textContent === "mark complete") {
        completeBtn.textContent = "unmark";
    } else {
        completeBtn.textContent = "mark complete";
    }
});