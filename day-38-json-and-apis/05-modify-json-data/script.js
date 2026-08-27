const jsonUser = '{"name":"Arpith","age":24,"city":"Raichur"}';

const user = JSON.parse(jsonUser);

user.age = 25;
user.job = "Frontend Developer";

const updatedJson = JSON.stringify(user);

console.log(updatedJson);