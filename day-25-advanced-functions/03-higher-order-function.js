function calculate(num1, num2, operation) {
    operation(num1, num2);
}

function add(num1, num2) {
    console.log(num1 + num2);
}

calculate(4, 6, add);