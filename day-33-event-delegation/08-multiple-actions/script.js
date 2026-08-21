const taskList = document.querySelector(".task-list");

taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        if (event.target.textContent === "Complete") {
            event.target.parentElement.classList.toggle("completed");
        } else if (event.target.textContent === "Delete") {
            event.target.parentElement.remove();
        }
    }
});