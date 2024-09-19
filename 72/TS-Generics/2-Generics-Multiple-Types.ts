/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/

// Generic Function `returnTypeEx`
function returnTypeEx<T>(val: T): T {
  // The function takes a value of type T and returns a value of the same type
  return val;
}

console.log(returnTypeEx<number>(100));
// Logs: 100, where T is inferred as 'number'

console.log(returnTypeEx<string>("Elzero"));
// Logs: "Elzero", where T is inferred as 'string'

// Arrow Function with Generics `returnTypeArrowSyntax`
const returnTypeArrowSyntax = <T>(val: T): T => val;
// A shorthand syntax for defining generic functions using arrow function syntax

console.log(returnTypeArrowSyntax<number>(100));
// Logs: 100, where T is 'number'

console.log(returnTypeArrowSyntax<string>("Elzero"));
// Logs: "Elzero", where T is 'string'

// Generic Function `testType`
function testType<T>(val: T): string {
  // The function returns a string that includes the value and its type
  return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(100));
// Logs: "The Value Is 100 And Type Is number"

console.log(testType<string>("Elzero"));
// Logs: "The Value Is Elzero And Type Is string"

// Generic Function with Multiple Types `multipleTypes`
function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  // The function accepts two parameters of different types and returns a string representation of both values
  return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Osama", 100));
// Logs: "The First Value Is Osama And Second Value 100", where T is 'string' and S is 'number'

console.log(multipleTypes<string, boolean>("Elzero", true));
// Logs: "The First Value Is Elzero And Second Value true", where T is 'string' and S is 'boolean'
