/******************
 * ARROW FUNCTION *
 ******************/

/**
 * The `addWithArrow` is an arrow function that takes two numeric arguments, `num1` and `num2`, 
 * and returns their sum. Arrow functions provide a concise syntax for function expressions.
 * 
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @returns {number} - The sum of `num1` and `num2`.
 */
const addWithArrow = (num1: number, num2: number): number => num1 + num2;

// Calling the arrow function `addWithArrow` and logging the result
console.log(addWithArrow(10, 20));  // Output: 30
