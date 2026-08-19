const box = document.querySelector(".box");
const circle = document.querySelector(".circle");

box.addEventListener("mousemove", (event) => {
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
});