/**********************
 * ANONYMOUS FUNCTION *
 **********************/

/**
 * This anonymous function is assigned to the constant `add`. It takes two numeric 
 * parameters, `num1` and `num2`, and returns their sum. Anonymous functions are 
 * functions without a name and are often used as expressions or callbacks.
 * 
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @returns {number} - The sum of `num1` and `num2`.
 */
const add = function (num1: number, num2: number): number {
  return num1 + num2;
};

// Calling the anonymous function `add` and logging the result
console.log(add(10, 20));  // Output: 30
