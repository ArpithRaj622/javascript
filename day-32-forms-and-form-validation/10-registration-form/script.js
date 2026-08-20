const form = document.querySelector("form");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const usernameMsg = document.querySelector(".username-msg");
const emailMsg = document.querySelector(".email-msg");
const passwordMsg = document.querySelector(".password-msg");
const confirmPasswordMsg = document.querySelector(".confirm-password-msg");
const successMsg = document.querySelector(".success-msg");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    let usernameValid = false;
    let emailValid = false;
    let passwordValid = false;
    let confirmPasswordValid = false;

    // username verification
    if (usernameValue === "") {
        usernameMsg.textContent = "Username is required!";
    } else if (usernameValue.length < 3) {
        usernameMsg.textContent = "Username must be at least 3 characters!";
    } else {
        usernameMsg.textContent = "Valid Username!";
        usernameValid = true;
    }

    // email verification
    if (emailValue === "") {
        emailMsg.textContent = "Email is required!";
    } else if (!emailPattern.test(emailValue)) {
        emailMsg.textContent = "Invalid Email!";
    } else {
        emailMsg.textContent = "Valid Email!";
        emailValid = true;
    }
    
    // password verification
    if (passwordValue === "") {
        passwordMsg.textContent = "Password is required!";
    } else if (passwordValue.length < 8) {
        passwordMsg.textContent = "Password must be at least 8 characters!";
    } else {
        passwordMsg.textContent = "Valid Password!";
        passwordValid = true;
    }

    // confirm verification
    if (confirmPasswordValue === "") {
        confirmPasswordMsg.textContent = "Please confirm your password!";
    } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordMsg.textContent = "Passwords do not match!";
    } else {
        confirmPasswordMsg.textContent = "Passwords match!";
        confirmPasswordValid = true;
    }

    // success message
    if (usernameValid && emailValid && passwordValid && confirmPasswordValid) {
        successMsg.textContent = "Registration successful!";
    } 
});