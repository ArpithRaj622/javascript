const jsonUsers = '[{"id":1,"name":"Arpith","role":"developer"},{"id":2,"name":"Raj","role":"designer"},{"id":3,"name":"Ananya","role":"developer"}]';

const users = JSON.parse(jsonUsers);
const designer = users.find((user) => {
    return user.role === "designer";
});

console.log(designer.name);
console.log(designer.id);