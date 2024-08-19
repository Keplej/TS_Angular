// ### This section is Functions with Functions ###

// function params
// Note: callback: () => void this is a type specfication
export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

// npx ts-node funcs-and-funcs.ts  

// Functions as Types
export type MutationFunction = (v: number) => number

export function arrayMuate(
    numbers: number[], 
    mutate: MutationFunction
): number[] {
    return numbers.map(mutate)
}

const myNewMutateFunc: MutationFunction = (v:number) => v * 100;

console.log(arrayMuate([1,2,3], (v) => v * 10));

// Returning functions
export type AdderFunction = (v: number) => number
export function createAdder(num: number): AdderFunction {
    return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
