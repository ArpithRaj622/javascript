const words = ["JavaScript", "is", "fun"];

let sentence = words.slice(1).reduce((sentence, word) => {
    return sentence + " " + word;
}, words[0]);

console.log(sentence);