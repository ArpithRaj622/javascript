const taskList = document.querySelector(".task-list");
const task = document.querySelectorAll(".task");
const completeBtns = document.querySelectorAll(".complete-btn");

completeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const listItem = btn.parentElement;
        listItem.classList.toggle("completed");
    });
});