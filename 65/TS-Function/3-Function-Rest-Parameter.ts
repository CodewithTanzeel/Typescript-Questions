/***************************
 * FUNCTION REST PARAMETER *
 ***************************/

/**
 * The `addAll` function accepts a rest parameter `nums`, which allows 
 * it to accept any number of numeric arguments.
 * - The parameter `...nums: number[]` indicates that `nums` is an array of numbers.
 * 
 * The function calculates the sum of all the values in the `nums` array and 
 * returns the total.
 * 
 * @param {...number[]} nums - A rest parameter of numbers.
 * @returns {number} - The sum of all numbers passed to the function.
 */
function addAll(...nums: number[]): number {
  let result = 0;  // Initialize the result variable to store the sum
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];  // Add each number in the array to the result
  }
  return result;  // Return the total sum
}

// Calling the `addAll` function with various numeric arguments and logging the result
console.log(addAll(10, 20, 30, 100, 10.5, +true));  // Output: 170.5
