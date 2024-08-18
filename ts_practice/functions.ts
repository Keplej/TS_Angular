// Any type is what we want to avoid. We want to control the types
function addNumbers(a: number, b: number): number {
    return a + b;
}

// module.exports = addNumbers; This is a no no in TS
// We want to use export default
export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string => 
    `${str1} ${str2}`;

// Union Types
// | is like or but in all reality it is a union type
// It means that creating a union type is okay for this param
export const format = (title: string, param: string | number): string => 
    `${title} ${param}`;

// Void Function
// Doesn't return anything
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
}

// Promise
// If you run into an issue, go into the tsconfig.json and change target to "esnext"
export const fetchData = (url: string): Promise<string> => 
    Promise.resolve(`Data from ${url}`)

// Multiple arguments Rest Paramaters
function introduce(salutation: string, ...names:string[]):string {
    return `${salutation} ${names.join(" ")}`;
}

// Misconceptions
// only inforces types at compile time not at run time
// Example:
export function getName(user: { first: string, last: string;}): string {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
// If you are going to interface your ts code with js code 
// always make sure those interface points are the points where you put in type safety
// not just in your types but also in some handy helper stuff
// optional chaining operator which is ?
// SO in this example the user is defined before we dereference it
// We compile it again with npx tsc functions.ts
// null coalescing operator ??