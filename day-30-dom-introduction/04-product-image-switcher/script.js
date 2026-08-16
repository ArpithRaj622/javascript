const image = document.querySelector("img");
const altBtn = document.querySelector(".alt-btn");


image.setAttribute("src", "img1.jpg");

altBtn.addEventListener("click", () => {
    image.setAttribute("src", "img2.jpg");
});