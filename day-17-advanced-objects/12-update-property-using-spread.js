const car = {
    brand : "Toyota",
    model : "Supra",
    color : "Red"
};

const updatedCar = {
    ...car,
    color : "Black"
};

console.log(updatedCar);