function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    console.log("Access grannted");
}

try {
    checkAge(17);
} catch(error) {
    console.log(error.message);
}