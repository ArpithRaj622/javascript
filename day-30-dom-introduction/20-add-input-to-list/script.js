const input = document.querySelector("input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
    const inputValue = input.value;
    const task = document.createElement("li");
    task.textContent = inputValue;
    taskList.appendChild(task);
    input.value = "";
});