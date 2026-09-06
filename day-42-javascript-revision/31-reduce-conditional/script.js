const numbers = [10, 15, 20, 25, 30, 35];

const result = numbers.reduce((acc, num) => {
    let requiredNum = num % 5 === 0 && num > 20 ? num : 0;
    return acc + requiredNum;
}, 0);

console.log(result);