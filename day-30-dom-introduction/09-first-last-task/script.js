const list = document.querySelector(".task-list");
const firstBtn = document.querySelector(".high-first-btn");
const lastBtn = document.querySelector(".high-last-btn");


firstBtn.addEventListener("click", () => {
    list.firstElementChild.textContent = "First Task";
});

lastBtn.addEventListener("click", () => {
    list.lastElementChild.textContent = "Last Task";
});