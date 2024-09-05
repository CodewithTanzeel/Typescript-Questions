// --- var - Declaring a variable (function-scoped or globally scoped). \\
var greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// --- const ->  Declaring a block-scoped, read-only constant. \\
const pi = 3.14159;
console.log(pi); // Output: 3.14159

// --- delete -> Removing a property from an object. --- \\
interface Person {
  name: string;
  age?: number;
}

const person: Person = {
  name: "Alice",
  age: 25,
};

delete person.age; // Valid since 'age' is optional
console.log(person); // Output: { name: "Alice" }
