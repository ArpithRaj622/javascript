const names = ["Arpith", "Raj", "Samantha", "Tom", "Alexander"];

let longestName = names[0];

for (let name of names) {
    if (name.length > longestName.length) {
        longestName = name;
    }
}

console.log(longestName);