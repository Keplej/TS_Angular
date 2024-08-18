"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
exports.getName = getName;
// Any type is what we want to avoid. We want to control the types
function addNumbers(a, b) {
    return a + b;
}
// module.exports = addNumbers; This is a no no in TS
// We want to use export default
exports.default = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
// Union Types
// | is like or but in all reality it is a union type
// It means that creating a union type is okay for this param
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// Void Function
// Doesn't return anything
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// Promise
// If you run into an issue, go into the tsconfig.json and change target to "esnext"
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// Multiple arguments Rest Paramaters
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
// Misconceptions
// only inforces types at compile time not at run time
// Example:
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : 'last');
}
// If you are going to interface your ts code with js code 
// always make sure those interface points are the points where you put in type safety
// not just in your types but also in some handy helper stuff
// optional chaining operator which is ?
// SO in this example the user is defined before we dereference it
// We compile it again with npx tsc functions.ts
// null coalescing operator 
