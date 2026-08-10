const names = ["arpith", "raj", "samantha", "tom"];

function processNames(names, capitalizeName) {
    names.forEach((name) => {
        console.log(capitalizeName(name));
    });
}

function capitalizeName(name) {
    return name[0].toUpperCase()+name.slice(1);
}

processNames(names, capitalizeName);