function showMessage() {
    console.log("Task completed!");
}

function executeTask(callback) {
    callback();
}

executeTask(showMessage);