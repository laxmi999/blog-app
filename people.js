const people = ["laxmi", "puja", "pujan", "tanka", "sabitri"];

const ages = [24, 22, 12, 56, 54];

console.log(people, ages);

// module.exports = {
//   people: people, //we could use different variables to pass values
//   ages: ages,
// };

// OR

module.exports = {
  people,
  ages,
};
