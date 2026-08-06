const users = [
    { name: "Arpith", verified: true },
    { name: "Raj", verified: false },
    { name: "Sam", verified: true },
    { name: "Tom", verified: true }
];

const allUsersVerified = users.every((user) => {
    return user.verified; 
});

console.log(allUsersVerified);