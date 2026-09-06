const users = [
  { name: "Arpith", age: 24, active: true },
  { name: "Rahul", age: 17, active: true },
  { name: "Sneha", age: 22, active: false },
  { name: "Kiran", age: 19, active: true }
];

const  activeAdultUsers = users.filter(user => user.active === true).map(user => `${user.name} is ${user.age} years old`);

console.log(activeAdultUsers);