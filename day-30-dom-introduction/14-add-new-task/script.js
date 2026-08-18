const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
    const newTask = document.createElement("li");
    newTask.textContent = "New Task";
    taskList.appendChild(newTask);
});