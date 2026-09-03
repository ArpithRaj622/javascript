const numbers = [1, 2, 3, 4];

const eachNumDoubled = numbers.flatMap((number) => {
    return [number, number * 2];
});

console.log(eachNumDoubled);