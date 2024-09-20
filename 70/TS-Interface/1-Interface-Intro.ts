/*******************
 * INTERFACE INTRO *
 *******************/

/**
 * The `PersonEx1` interface defines the structure of an object that
 * contains a person's name and age.
 *
 * Properties:
 * - `name`: A string representing the person's name.
 * - `age`: A number representing the person's age.
 */
interface PersonEx1 {
  name: string; // Person's name as a string
  age: number; // Person's age as a number
}

/**
 * The constant `John` is an object that adheres to the `PersonEx1` interface.
 * It represents a person named John who is 30 years old.
 */
const John: PersonEx1 = {
  name: "John", // Assigning "John" to the name property
  age: 30, // Assigning 30 to the age property
};
