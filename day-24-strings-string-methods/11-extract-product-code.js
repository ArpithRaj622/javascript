let productCode = "PROD-4521";

const codeStartIndex = productCode.indexOf("-");

let codeNumber = productCode.slice(codeStartIndex+1);

console.log(codeNumber);