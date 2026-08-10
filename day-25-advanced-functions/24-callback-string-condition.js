const names = ["Arpith", "Raj", "Samantha", "Tom", "Alexander"];

function processName(names, isLongName) {
    names.forEach((name) => {
        let long = isLongName(name);
        if (long) {
            console.log(name);
        }
    });
}

function isLongName(name) {
    if (name.length > 5) {
        return true;
    } else {
        return false;
    }
}

processName(names, isLongName);