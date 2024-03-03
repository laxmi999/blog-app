// const all_people = require("./people");

// console.log(all_people);

// console.log(all_people.people, all_people.ages);

// Destructuring

const { people, ages } = require("./people.js");

// console.log(people, ages);

const os = require("os");

console.log(os.platform(), os.homedir());
