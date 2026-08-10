const numbers = [10, 20, 30, 40];

function processNumbers(numbers, callback) {
    numbers.forEach ((number) => {
        console.log(callback(number));
    })
}

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

processNumbers(numbers, double);
console.log();
processNumbers(numbers, square);