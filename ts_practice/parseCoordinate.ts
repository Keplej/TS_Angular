// Function Overloading in TS
interface Coordinate {
    x: number;
    y: number;
}

// // Parse coord from obj
// function parseCoordinateFromObject(obj: Coordinate): Coordinate {
//     return {
//         ...obj,
//     }
// }

// // x and y from numbers
// function parsecoordinateFromNumbers(x: number, y: number): Coordinate {
//     return {
//         x,
//         y,
//     }
// }

// function overloading
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
// Adding in string variant
function parseCoordinate(str: string): Coordinate;
// impliment
// unknown is any but we have to cast it before we use it
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };
    // Type of arg1
    if (typeof arg1 === 'object') {
        coord = {
            ...(arg1 as Coordinate) //as keyword
        };
    } else if (typeof arg1 === 'string') { //Checking for string
        (arg1 as string).split(',').forEach(str => {
            const [key, value] = str.split(':')
            coord[key as "x" | "y"] = parseInt(value, 10);
        })
    } else {
        // type of arg2
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        }
    }

    return coord;
}

//1/2 we have two different signature. one as object or x and y
// npx ts-node parseCoordinate.ts
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({x: 52, y: 75}));

// String variance 
console.log(parseCoordinate("x:50,y:25"));