const student = {
    name : "Arpith",
    age : 24,
    course : "BCA"
};

for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}