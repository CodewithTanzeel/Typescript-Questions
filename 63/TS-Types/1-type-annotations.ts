/********************
 * TYPE ANNOTATIONS *
 ********************/

/**
 * Here, type annotations are used to explicitly define the data types of variables.
 * `myNumberExOne` is annotated as a number and `myStringExOne` as a string. 
 * This ensures that only values of the specified type can be assigned to these variables.
 */
let myNumberExOne: number = 42;
let myStringExOne: string = "Hello, TypeScript";

// Logging the values of the variables to the console
console.log("My Number Is:", myNumberExOne);
console.log("My String Is:", myStringExOne);

/**
 * Another way to define and assign the variables is by declaring them first with 
 * type annotations and then assigning values separately. This provides flexibility 
 * in cases where variables might need to be initialized later.
 */
let myNumberExTwo: number; // Variable declared with type annotation (number)
let myStringExTwo: string; // Variable declared with type annotation (string)

// Assigning values to the declared variables
myNumberExTwo = 42;
myStringExTwo = "Hello, TypeScript";

// Logging the values of the variables to the console
console.log("My Number Is:", myNumberExTwo);
console.log("My String Is:", myStringExTwo);
