/************
 * ANY TYPE *
 ************/

/**
 * In this example, the `any` type is used to indicate that a variable can hold a value of any type. 
 * This disables TypeScript's type checking for that variable, allowing it to be reassigned 
 * to different types without raising errors. The `myVariable` is first assigned a number 
 * and later reassigned a string, demonstrating the flexibility of the `any` type.
 */

let myVariable: any = 42; // `myVariable` is initialized with a number
myVariable = "Hello, TypeScript"; // Reassigned to a string without type error

// Logging the current value of `myVariable` (which is now a string)
console.log(myVariable); // Output: "Hello, TypeScript"
