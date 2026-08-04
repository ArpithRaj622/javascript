const users = [
    { name: "Arpith", isActive: true, lastLoginDays: 2 },
    { name: "Raj", isActive: false, lastLoginDays: 5 },
    { name: "Sam", isActive: true, lastLoginDays: 12 },
    { name: "Tom", isActive: true, lastLoginDays: 1 },
    { name: "Sara", isActive: false, lastLoginDays: 3 }
];

const activeUsers = users.filter((user) => {
    return user.isActive && user.lastLoginDays <= 7;
});

console.log(activeUsers);