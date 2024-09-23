/**
 * Multiplies any number of parameters.
 * @param {...number[]} numbers - A rest parameter representing the numbers to be multiplied.
 * @returns {number} - The product of all the provided numbers.
 */
const multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => {
    return total * number; // Multiplies each number with the running total.
  }, 1); // Initializes total to 1 to avoid multiplication by 0.

console.log(multiplyParameters(3, 3, 3)); // Output: 27 (3 * 3 * 3)
