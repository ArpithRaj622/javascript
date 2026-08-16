const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    heading.textContent = "Raj";
    paragraph.textContent = "raj@gmail.com";
});