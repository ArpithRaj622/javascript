const jsonUser = '{"name":"Arpith","age":24,"address":{"city":"Raichur","state":"Karnataka"}}';

const user = JSON.parse(jsonUser);

console.log(user.name);
console.log(user.address.city);
console.log(user.address.state);