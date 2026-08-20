const form = document.querySelector("form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password = document.querySelector(".password");
const usernameMsg = document.querySelector(".username-msg");
const emailMsg = document.querySelector(".email-msg");
const passwordMsg = document.querySelector(".password-msg");
const registerConfirm = document.querySelector(".register-confirm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let usernameValid = false;
    let emailValid = false;
    let passwordValid = false;

    if (usernameValue === "") {
        usernameMsg.textContent = "Username is required!";
    } else if (usernameValue.length < 3) {
        usernameMsg.textContent = "Username must be at least 3 characters!";
    } else {
        usernameMsg.textContent = "Username accepted!";
        usernameValid = true;
    }

    if (emailValue === "") {
        emailMsg.textContent = "Email is required!";
    } else if (emailPattern.test(emailValue)) {
        emailMsg.textContent = "Email accepted!";
        emailValid = true;
    } else {
        emailMsg.textContent = "Please enter a valid email!";
    }

    if (passwordValue === "") {
        passwordMsg.textContent = "Password required!";
    } else if (passwordValue.length < 8) {
        passwordMsg.textContent = "Password must be at least 8 characters!";
    } else {
        passwordMsg.textContent = "Password accepted!";
        passwordValid = true;
    }

    if (usernameValid && emailValid && passwordValid) {
        registerConfirm.textContent = "Registration successful!";
    }
});