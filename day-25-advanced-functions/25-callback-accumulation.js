const numbers = [10, 20, 30, 40, 50];

function calculateTotal(numbers, double) {
    let total = 0;
    numbers.forEach((number) => {
        total += double(number);
    });
    console.log(total);
}

function double(number) {
    return number * 2;
}

calculateTotal(numbers, double);