const taskList = document.querySelector(".task-list");
const para = document.querySelector("p");

taskList.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    const deletebtn = event.target.closest("button");
    if (link) {
        event.preventDefault();
        para.textContent = link.textContent;
    } 
    if (deletebtn) {
        if (deletebtn.dataset.action === "delete") {
            deletebtn.parentElement.remove();
            para.remove();
        }
    }
});