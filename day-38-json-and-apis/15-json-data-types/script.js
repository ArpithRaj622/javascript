const jsonData = '{"name":"Arpith","age":24,"isStudent":true,"middleName":null}';

const data = JSON.parse(jsonData);

console.log(data.name);
console.log(data.isStudent);
console.log(data.middleName);
console.log(typeof data.isStudent);
console.log(typeof data.middleName);