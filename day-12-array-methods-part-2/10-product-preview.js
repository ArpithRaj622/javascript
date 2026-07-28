const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer", "Webcam"];

const previewListArray = products.slice(0,4);

const previewListString = previewListArray.join(" - ");

console.log(`Preview List:
${previewListString}`);