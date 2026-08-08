const names = ["Arpith", "Raj", "Samantha", "Tom", "Alexander"];

let strLengthSum = 0;

for (let name of names) {
    strLengthSum += name.length;
}

console.log(strLengthSum);