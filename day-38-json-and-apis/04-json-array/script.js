const jsonUsers = '[{"name":"Arpith","age":24},{"name":"Raj","age":25},{"name":"Ananya","age":23}]';

const users = JSON.parse(jsonUsers);

users.forEach(user => {
    console.log(user.name);
});

const names = users.map((user) => {
    return user.name;
});

console.log(names);