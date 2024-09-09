// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True

// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
console.log(10 >= 10); // True
console.log(5 <= 4); // False
console.log(5 == 5); // True

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
console.log(5 > 3 && 2 < 4); // True
console.log(5 > 3 && 2 > 4); // False
console.log(5 > 3 || 2 > 4); // True
console.log(5 < 3 || 2 > 4); // False

// Tests for string length
console.log("String length tests:");
console.log("apple".length == 5); // True
console.log("banana".length > 5); // True
console.log("cherry".length < 5); // False

// Test whether an item is in an array
let fruits = ["apple", "banana", "cherry"];

console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

console.log("Is 'mango' in fruits?");
console.log(fruits.includes("mango")); // False

// Test whether an item is not in an array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

console.log("Is 'banana' not in fruits?");
console.log(!fruits.includes("banana")); // False

// Tests with arrays and their lengths
console.log("Array length tests:");
console.log(fruits.length == 3); // True
console.log(fruits.length > 2); // True
console.log(fruits.length < 2); // False

// Tests combining multiple conditions
console.log("Combining multiple conditions:");
console.log(fruits.includes("apple") && fruits.length == 3); // True
console.log(fruits.includes("mango") || fruits.length == 3); // True
console.log(fruits.includes("banana") && fruits.length > 2); // True
console.log(fruits.includes("cherry") && fruits.length < 2); // False
console.log(!fruits.includes("apple") || fruits.length == 4); // False
console.log(fruits.includes("apple") && !fruits.includes("mango")); // True
