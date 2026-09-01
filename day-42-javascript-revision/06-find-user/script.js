const users = [
    { id: 1, name: "Arpith", role: "developer" },
    { id: 2, name: "Raj", role: "designer" },
    { id: 3, name: "Ananya", role: "developer" },
    { id: 4, name: "Kiran", role: "tester" }
];

const designerRoleUser = users.find((user) => {
    return user.role === "designer";
});

const message = `${designerRoleUser.name} is a designer`;

console.log(message);