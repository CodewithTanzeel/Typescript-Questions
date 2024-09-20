/***********************************
 * INTERFACE METHOD AND PARAMETERS *
 ***********************************/

/**
 * The `PersonEx2` interface defines the structure of an object representing a person.
 * In addition to basic properties like `name` and `age`, it includes a `greet` method
 * that takes a `message` parameter.
 * 
 * Properties:
 * - `name`: A string representing the person's name.
 * - `age`: A number representing the person's age.
 * 
 * Methods:
 * - `greet(message: string)`: A method that accepts a string message and returns void.
 */
interface PersonEx2 {
  name: string;              // Person's name as a string
  age: number;               // Person's age as a number
  greet(message: string): void;  // Method to greet with a message
}

/**
* The constant `Sarah` is an object that implements the `PersonEx2` interface.
* It has properties `name` and `age`, and a method `greet` to display a message.
*/
const Sarah: PersonEx2 = {
  name: "Sarah",  // Assigning "Sarah" to the name property
  age: 30,        // Assigning 30 to the age property
  greet(message: string) {   // Defining the greet method
      // Logs the person's name and the provided message
      console.log(`${this.name} says: ${message}`);
  },
};

// Invoking the greet method with the message "Hello, TypeScript!"
Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!
