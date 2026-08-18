const editBtns = document.querySelectorAll(".edit-btn");

editBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const listItem = btn.parentElement;
        listItem.textContent = "task updated";
    });
});