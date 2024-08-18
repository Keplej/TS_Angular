import addNumbers, { addStrings, getName } from "./functions";
// Command: npx ts-node functions-test.ts

console.log(addNumbers(1, 2));
// console.log(addNumbers(1, "Jack"));

console.log(addStrings('a', 'b'));

// What if we want just str1 but no str2 and have str defualt to something else?
// In the addStrings function you simply add str2: string = ""
console.log(addStrings('a'));

// Testing getName
console.log(getName({ first: 'John', last: 'Doe'}));


