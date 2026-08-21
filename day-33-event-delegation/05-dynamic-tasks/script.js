const input = document.querySelector("input");
const addTask = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");

addTask.addEventListener("click", () => {
    const inputValue = input.value;
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;
    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    listItem.append(dltBtn);
    taskList.append(listItem);
});

taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Delete") {
        event.target.parentElement.remove();
    }
});