const jsonUser = '{"name":"Arpith","age":24,"skills":["HTML","CSS","JavaScript"]}';

const user = JSON.parse(jsonUser);

user.age = 25;
user.skills.push("React");

const updatedJson = JSON.stringify(user);

console.log(updatedJson);