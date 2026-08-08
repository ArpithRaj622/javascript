const names = ["Arpith", "Raj", "Sam", "Tom", "Sara", "John"];

let count = 0;

for (let name of names) {
    if (name.length > 4) {
        count++;
    }
}

console.log(count);