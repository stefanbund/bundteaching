const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(x => x * 1000);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//second array, strings: 
const names = ["Alice", "Bob", "Charlie"];
const upperCaseNames = names.map(c => c.toUpperCase());
console.log(upperCaseNames); // Output: ["ALICE", "BOB", "CHARLIE"]