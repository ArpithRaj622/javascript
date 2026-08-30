function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    } else {
        return a / b;
    }
}

try {
    divide(10, 0); 
} catch(error) {
    console.log(error.message);
} finally {
    console.log("Operation completed");
}