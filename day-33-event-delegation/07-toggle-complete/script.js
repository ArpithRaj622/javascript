const taskList = document.querySelector(".task-list");

taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Complete") {
        event.target.parentElement.classList.toggle("complete");
    }
});