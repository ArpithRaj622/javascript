const form = document.querySelector("form");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const para = document.querySelector("p");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (passwordValue === "" || confirmPasswordValue === "") {
        para.textContent = "Both password fields are required!";
    } else if (passwordValue === confirmPasswordValue) {
        para.textContent = "Passwords match!";
    } else if (passwordValue !== confirmPasswordValue) {
        para.textContent = "Passwords do not match!";
    }
});