const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
    let task = taskInput.value;
    let listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
    taskInput.value = "";
});