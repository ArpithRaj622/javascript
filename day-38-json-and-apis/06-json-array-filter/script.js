const jsonUsers = '[{"name":"Arpith","age":24},{"name":"Raj","age":17},{"name":"Ananya","age":23},{"name":"Kiran","age":16}]';

const users = JSON.parse(jsonUsers);

const adultUsers = users.filter((user) => {
    return user.age >= 18; 
});

const adultUsersJson = JSON.stringify(adultUsers);

console.log(adultUsersJson);