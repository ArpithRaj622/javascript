const addLinkInput = document.querySelector(".add-link-input");
const addLinkBtn = document.querySelector(".add-link-btn");
const linkList = document.querySelector(".link-list");
const result = document.querySelector(".result");
const link = addLinkInput.value;

function createLinkListItem(link) {
    const listItem = document.createElement("li");
    
    const listItemLink = document.createElement("a");
    listItemLink.setAttribute("href", `${link}`);
    listItemLink.textContent = "Open";

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("data-action", "delete");
    deleteBtn.textContent = "Delete";

    listItem.append(listItemLink);
    listItem.append(deleteBtn);

    linkList.append(listItem);
}

addLinkBtn.addEventListener("click", () => {
    const link = addLinkInput.value;
    if (link === "") {

    } else {
        createLinkListItem(link);
        addLinkInput.value = "";
    }
});

linkList.addEventListener("click", (event) => {
    const clickLink = event.target.closest("a");
    if (clickLink) {
        event.preventDefault();
        result.textContent = clickLink.parentElement.firstElementChild.getAttribute("href");
    }
    const deleteBtn = event.target.closest("button");
    if (deleteBtn) {
        if (deleteBtn.dataset.action === "delete") {
            deleteBtn.parentElement.remove();
        }
    }
});