const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        para.textContent = "Message sent!";
    }
});