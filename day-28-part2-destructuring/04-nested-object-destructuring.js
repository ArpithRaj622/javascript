const user = {
    name : "Arpith",
    address : {
        city : "Bengaluru",
        state : "Karnataka"
    }
}

const {address : {city, state}} = user;

console.log(`${city}
${state}`);