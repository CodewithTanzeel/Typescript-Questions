/**************
 * TYPE ALIAS *
 **************/

/**
 * The `MyString` type alias is defined to represent the `string` type.
 * This allows for clearer code and can enhance readability.
 */
type MyString = string;

/**
 * The variable `myName` is declared using the `MyString` type alias,
 * allowing it to hold a string value.
 */
let myName: MyString = "Glitcher";  // Using type alias for string

/**
 * The `MyStringOrNumber` type alias is defined to represent a union type
 * that can be either `string` or `number`.
 */
type MyStringOrNumber = string | number;

/**
 * The variable `myValue` is declared using the `MyStringOrNumber` type alias,
 * allowing it to hold either a string or a number.
 */
let myValue: MyStringOrNumber = 10;  // Using type alias for union type

// Another example of using type aliases

/**
 * The `Employee` type alias is defined as an object type with three properties:
 * - `name`: A required string property.
 * - `age`: A required number property.
 * - `email`: An optional string property (indicated by the `?`).
 */
type Employee = {
  name: string;
  age: number;
  email?: string;  // Optional property
};

/**
 * The `alice` constant is created as an object adhering to the `Employee` type.
 * All properties are provided, including the optional `email`.
 */
const alice: Employee = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

/**
 * The `bob` constant is created as an object adhering to the `Employee` type.
 * The optional `email` property is omitted.
 */
const bob: Employee = {
  name: "Bob",
  age: 25,
};

// Output the `alice` and `bob` objects to the console
console.log(alice);  // Logs: { name: "Alice", age: 30, email: "alice@example.com" }
console.log(bob);    // Logs: { name: "Bob", age: 25 }
