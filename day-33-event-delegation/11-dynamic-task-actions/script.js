const inputTask = document.querySelector(".input-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".task-list");

function createListItem(task) {
    const listItem = document.createElement("li");
    
    const text = document.createElement("p");
    text.textContent = task;
    
    const completeBtn = document.createElement("button");
    completeBtn.setAttribute("data-action", "complete");
    completeBtn.textContent = "Complete";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("data-action", "delete");
    deleteBtn.textContent = "Delete";
    
    listItem.append(text);
    listItem.append(completeBtn);
    listItem.append(deleteBtn);

    taskList.append(listItem);
}

addTaskBtn.addEventListener("click", () => {
    if (inputTask.value === "") {

    } else {
        const task = inputTask.value.trim();
        inputTask.value = "";

        createListItem(task);
    }
});

taskList.addEventListener("click", (event) => {
    const clickedBtn = event.target.closest("button");
    if (clickedBtn.dataset.action === "complete") {
        clickedBtn.parentElement.firstElementChild.classList.toggle("task-completed");
    } else if (clickedBtn.dataset.action === "delete") {
        clickedBtn.parentElement.remove();
    }
});