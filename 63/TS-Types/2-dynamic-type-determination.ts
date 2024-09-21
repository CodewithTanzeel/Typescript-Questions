/******************************
 * DYNAMIC TYPE DETERMINATION *
 ******************************/

/**
 * In this example, TypeScript is automatically inferring the type of the `greeting` variable 
 * based on the value assigned to it. Since `"Hello, world!"` is a string, TypeScript determines 
 * the type of `greeting` as `string`. This is an example of dynamic type determination or 
 * type inference, where the type is implicitly assigned by the TypeScript compiler.
 */
let greeting = "Hello, world!"; // TypeScript infers the type as `string`

// Logging the value of the greeting to the console
console.log(greeting);
