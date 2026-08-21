const taskList  = document.querySelector(".task-list");

taskList.addEventListener("click", (event) => {
    const clickedBtn = event.target.closest("button");
    if (clickedBtn.dataset.action === "complete") {
        clickedBtn.parentElement.classList.toggle("completed");
    } else if (clickedBtn.dataset.action === "delete") {
        clickedBtn.parentElement.remove();
    }
});