const numbers = [5, 10, 15, 20, 25];

function processNumbers(numbers, addTen) {
    numbers.forEach((number) => {
        console.log(addTen(number));
    });
}

function addTen(number) {
    return number + 10;
}

processNumbers(numbers, addTen);