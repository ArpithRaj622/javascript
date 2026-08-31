function processUser(name, callback) {
    console.log("Processing " + name);
    callback();
}

function complete() {
    console.log("Done");
}

processUser("Arpith", complete);