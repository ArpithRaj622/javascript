const taskList = document.querySelector(".task-list");
const removeAllBtn = document.querySelector(".remove-all-btn");
const listItems = document.querySelectorAll(".task-list > li");

removeAllBtn.addEventListener("click", () => {
    listItems.forEach((item) => {
        item.remove();
    });
});