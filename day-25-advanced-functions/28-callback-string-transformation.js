const names = ["Arpith", "Raj", "Samantha", "Tom"];

function processNames(names, getNameLength) {
    names.forEach((name) => {
        console.log(getNameLength(name));
    });
}

function getNameLength(name) {
    return name.length;
}

processNames(names, getNameLength);