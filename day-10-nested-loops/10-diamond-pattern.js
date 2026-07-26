for (let i = 1; i <= 5; i ++) {
    for (let j = 1; j <= 5-i; j++) {
        process.stdout.write(" ");
    }
    for (let k = 1; k <= (2 * i) - 1; k++) {
        process.stdout.write("*");
    }
    console.log();
}
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i-1; j++) {
        process.stdout.write(" ");
    }
    for (let k = 1; k <= 11 - (2 * i); k++) {
        process.stdout.write("*");
    }
    console.log();
}