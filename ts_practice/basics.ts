// This is a bug
// let userName = "John";
let userName: string = "John"
// let hasLoggedIn = true;
let hasLoggedIn: boolean = true;
// Number Type
let myNumber: number = 10;
// Regex
let myRegex: RegExp = /foo/;
// The above are showing us how TS uses Types

userName += " Doe"; // The issue is that the Type 'string' is not assignable to type 'boolean'

console.log(hasLoggedIn)

// Array Type
const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3];

// Objects
// How do we define it once and if we make a change it will change everywhere?
// We use the interface keyword.
interface Person {
    first: string;
    last: string;
}

// const myPerson: {
//     first: string;
//     last: string;
// } = {
//     first: "John",
//     last: "Doe",
// }

const myPerson: Person = {
    first: "John",
    last: "Doe",
}


// Objects as Maps
// Using a Utility Type Record where we define the key and value type
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}
ids[30] = "c";

// Conditionals and Expressions
if (ids[30] === 'D') {

}

// Loops
// The value of i is infered to be a number 
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// infered the input type are numbers. Can see when you hover over v
[1,2,3].forEach((v) => console.log(v));
const out = [4,5,6].map((v) => v*10);
// With this change we see that it changes to string
const outTwo = [4,5,6].map((v) => `${v*10}`);
// If we specify 
const outThree: number[] = [4,5,6].map((v) => v*10);