const taskList = document.querySelector(".task-list");
const removeBtn = document.querySelector(".remove-btn");

removeBtn.addEventListener("click", () => {
    const lastItem = taskList.lastElementChild;
    lastItem.remove();
});