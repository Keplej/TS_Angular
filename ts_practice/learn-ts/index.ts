// let isDone: boolean = false;

// let lines: number = 42;

// let person: string = "Anders";

// Logical Operators
// and (&&) returns true if both conditions are true
// Or (||) returns true if at least one of the conditions is true
// Not (!) reverses the truthiness of the condition

// Equal to (==): Checks if two values are equal.
// Not equal to (!=): Checks if two values are not equal.
// Strictly equal to (===): Checks if two values are equal in value and type.
// Strictly not equal to (!==): Checks if two values are not equal in value and type.
// Greater than (>): Checks if the value on the left is greater than the value on the right.
// Less than (<): Checks if the value on the left is less than the value on the right.
// Greater than or equal to (>=): Checks if the value on the left is greater than or equal to the value on the right.
// Less than or equal to (<=): Checks if the value on the left is less than or equal to the value on the right.

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    // Your code to override the speak method goes here
    speak(): void {
    	console.log(`${this.name} barks`)
    }
}
const myDog: Dog = new Dog("Rex");
// myDog.speak();

// write the interface here
interface Car {
    model: string;
    year: number;
}

let myCar: Car = {
    model: "Toyota",
    year: 2022
};

// console.log(myCar.model);

// Type Assertions
let data: any = "Hello, TypeScript!";

function getStringLength(value: any): number {
    // Your code here
    let dataLength: number = (data as string).length;
    return dataLength;
}

// console.log(getStringLength(data));


// keyof typeof operators
// The keyof type operator works with object types to create a string or numeric literal union of its keys.
function updateProperty<T>(obj: T, key: keyof T, value: any): T {
    // Your code here
    obj[key] = value;
    return obj;
}
// console.log(updateProperty({name: "Alice", age: 28}, "name", "Bob"));

// Type Unions and Intersections
// Intersection types allow you to combine multiple types into one, enabling objects to have properties of all intersected types.
// Example:
// type Name = { name: string };
// type Age = { age: number };
// type Person = Name & Age;

type Cars = { type: "car", doors: number };
type Bike = { type: "bike", hasBell: boolean };

type Vehicle = Cars | Bike;

function identifyVehicle(vehicle: Vehicle): string {
    // Your code here
    return vehicle.type;
}

console.log(identifyVehicle({ type: "bike", hasBell: true }));

// Conditional Types
// Conditional types help in expressing types in relation to other types, particularly in generic types. It has the syntax T extends U ? X : Y.


// Enum Type
// Enums are a way of giving friendly names to sets of numeric values. They can make code more readable and less error-prone
// Your enum here
enum Days {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}


function classifyDay(day: Days): string {
    switch (day) {
        case Days.Saturday:
        case Days.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
}

console.log(classifyDay(Days.Monday));
console.log(classifyDay(Days.Saturday));