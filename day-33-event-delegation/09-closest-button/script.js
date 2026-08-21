const taskList = document.querySelector(".task-list");

taskList.addEventListener("click", (event) => {
    const clickedBtn = event.target.closest("button");
    if (clickedBtn.innerHTML === "<span>✓</span>Complete") {
        clickedBtn.parentElement.classList.toggle("completed");
    } else if (clickedBtn.innerHTML === "<span>×</span>Delete") {
        clickedBtn.parentElement.remove();
    }
});