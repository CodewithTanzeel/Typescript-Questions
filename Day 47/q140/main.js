// When you try to use a reserved word as a variable name an error occurs because have  predefined meanings.
// Using them as variable names would cause confusion for the compiler or interpreter, as it wouldn't be able to recognize between your named variable and the language's built-in functionality.
// Example
var vat = "var"; // taking vat as a variable
console.log(vat); // Okay
// try {
//     var var: string = "value" // taking var as a variable
//     console.log(var) // Error
// } catch(error) {
//     console.log(error)
// }
