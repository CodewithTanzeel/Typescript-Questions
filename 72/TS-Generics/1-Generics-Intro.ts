/******************  
 * GENERICS INTRO *  
 ******************/

// A generic function that returns the input value as is
function returnType<T>(val: T): T {
  // The type parameter <T> allows the function to accept and return any type
  return val;
}

// Usage of the generic function with different types

const numValue: number = returnType<number>(100); // Passes a number, <T> becomes 'number'
const strValue: string = returnType<string>("Elzero"); // Passes a string, <T> becomes 'string'
const boolValue: boolean = returnType<boolean>(true); // Passes a boolean, <T> becomes 'boolean'
const arrValue: number[] = returnType<number[]>([1, 2, 3, 4]); // Passes an array of numbers, <T> becomes 'number[]'

// Logs the returned values from the generic function for each type
console.log(`Number Value: ${numValue}`); // Output: 100
console.log(`String Value: ${strValue}`); // Output: "Elzero"
console.log(`Boolean Value: ${boolValue}`); // Output: true
console.log(`Array Value: ${arrValue}`); // Output: [1, 2, 3, 4]
