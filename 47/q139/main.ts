// --- var - Declaring a variable (function-scoped or globally scoped). \\
// 'var' is function-scoped, meaning it can be accessed globally within a function or in the window object
var greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// --- const -> Declaring a block-scoped, read-only constant. \\
// 'const' creates a constant that can't be reassigned, ensuring its value remains the same after initialization.
const pi = 3.14159;
console.log(pi); // Output: 3.14159

// --- delete -> Removing a property from an object. --- \\
// 'delete' is used to remove a property from an object, not to delete variables.
interface Person {
  name: string;
  age?: number; // Optional 'age' property
}

const person: Person = {
  name: "Alice",
  age: 25, // Initially has 'age' property
};

// Using 'delete' to remove the 'age' property from 'person'
delete person.age; // 'delete' only works with object properties

console.log(person); // Output: { name: "Alice" }
