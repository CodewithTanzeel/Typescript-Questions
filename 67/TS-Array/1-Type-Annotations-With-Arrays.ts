/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ********************************/

/**
 * The `fruits` array is explicitly annotated to contain only strings.
 * Type annotations ensure that the array will only hold string values.
 *
 * Initial values in the array:
 * - "apple"
 * - "banana"
 * - "cherry"
 */
let fruits: string[] = ["apple", "banana", "cherry"]; // String array annotation

/**
 * Looping through the `fruits` array using a traditional `for` loop.
 *
 * For each iteration:
 * - The current element of the array is accessed using `fruits[i]`.
 * - The string is converted to uppercase using `toUpperCase()` method.
 * - The uppercase fruit name is then logged to the console.
 */
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`); // Output each fruit in uppercase
}
