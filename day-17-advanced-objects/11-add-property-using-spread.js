const student = {
    name : "Arpith",
    course : "BCA"
};

const updatedStudent = {
    ...student,
    age : 24
};

console.log(updatedStudent);