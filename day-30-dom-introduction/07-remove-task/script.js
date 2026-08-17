const delBtns = document.querySelectorAll("button");

delBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const listItem = btn.parentElement;
        listItem.remove();
    } );
});