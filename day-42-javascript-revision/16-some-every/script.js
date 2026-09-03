const scores = [75, 82, 91, 68, 88];

const scoreGreaterThan90 = scores.some((score) => {
    return score > 90;
});

const everyScoreGreaterThan50 = scores.every((score) => {
    return score > 50;
});

console.log(scoreGreaterThan90);
console.log(everyScoreGreaterThan50);