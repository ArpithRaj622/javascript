let username = " arpith raj ";

username = username.trim();

let names = username.split(" ");

let capitalizedUsername = names[0].charAt(0).toUpperCase() + names[0].slice(1) +" "+names[1].charAt(0).toUpperCase() + names[1].slice(1); 

console.log(capitalizedUsername);