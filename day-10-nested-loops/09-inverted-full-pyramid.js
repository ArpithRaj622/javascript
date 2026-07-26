for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i-1; j++) {
        process.stdout.write(" ");
    }
    for (let k = 1; k <= 11 - (2 * i); k++) {
        process.stdout.write("*");
    }
    console.log();
}

