const jsonUser = '{"name":"Arpith","age":24,"city":"Raichur"}';

const user = JSON.parse(jsonUser);

console.log(user.name);
console.log(user.phone);

if (user.phone === undefined) {
    console.log("Phone number not available");
}