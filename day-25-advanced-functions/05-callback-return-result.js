function calculate(num1, num2, operation) {
    let result = operation(num1, num2);
    console.log(result);
}

function add(num1, num2) {
    return num1 + num2;
}

calculate(15, 25, add);