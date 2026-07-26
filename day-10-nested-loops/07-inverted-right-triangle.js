for (let i = 1; i <= 5; i++) {

    // Print spaces
    for (let j = 1; j <= i - 1; j++) {
        process.stdout.write(" ");
    }

    // Print stars
    for (let k = 1; k <= 6 - i; k++) {
        process.stdout.write("*");
    }

    console.log();
}