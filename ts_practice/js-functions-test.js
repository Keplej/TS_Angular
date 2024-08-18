// We are testing ts to js from getName function 
// command node js-functions-test.js
// We wont be able to find it since its functions.js not functions.ts
// What we need to do is compile this
// npx tsc functions.ts
// After running that command we would be able to run this
const { getName } = require('./functions');

console.log(getName({
    first: 'a',
    last: 'b'
}));

console.log(getName());
