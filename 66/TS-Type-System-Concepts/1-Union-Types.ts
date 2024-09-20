/***************
 * UNION TYPES *
 ***************/

/**
 * The variable `myVar` is declared with a union type that allows it to hold 
 * either a `string` or a `number`.
 */
let myVar: string | number;  // Union type declaration

/**
 * Assigning a string value to `myVar`. This is a valid assignment
 * because `myVar` is of type `string | number`.
 */
myVar = "Hello"; // Valid assignment
console.log(myVar);  // Output: Hello

/**
 * Assigning a number value to `myVar`. This is also a valid assignment
 * as it conforms to the declared union type.
 */
myVar = 42; // Valid assignment
console.log(myVar);  // Output: 42

/**
 * The following line is commented out because it would result in a TypeScript error.
 * 
 * Attempting to assign a boolean value to `myVar` would cause a compile-time error
 * since `boolean` is not included in the defined union type `string | number`.
 */
// myVar = true;  // Error: Type 'boolean' is not assignable to type 'string | number'.
