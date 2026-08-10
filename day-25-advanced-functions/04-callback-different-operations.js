function calculate(num1, num2, operation) {
    operation(num1, num2);
}

function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function multiply(num1, num2) {
    console.log(num1 * num2);
}

calculate(6, 6, add);
calculate(5, 2, subtract);
calculate(2, 3, multiply);