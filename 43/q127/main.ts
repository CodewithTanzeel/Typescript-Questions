// Function Expression
/**
 * A function expression that calculates the sum of two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The sum of num1 and num2.
 */
function sum1(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(sum1(2, 2)); // Calls the sum1 function (by function expression).

// Arrow Function
/**
 * An arrow function that calculates the sum of two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The sum of num1 and num2.
 */
const sum2 = (num1: number, num2: number): number => {
    return num1 + num2;
};

console.log(sum2(2, 2)); // Calls the sum2 function (by arrow function).
