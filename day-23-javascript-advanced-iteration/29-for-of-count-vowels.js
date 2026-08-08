const names = ["Arpith", "Raj", "Samantha", "Tom", "Alexander"];

let vowelCount = 0;

for (name of names) {
    for (letter of name.toLowerCase()) {
        if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter === 'u'))  {
            vowelCount++;
        }
    } 
}

console.log(vowelCount);