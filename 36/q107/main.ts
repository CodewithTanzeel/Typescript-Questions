/**
 * Function to check if a given number is divisible by both 2 and 3.
 * @param num - The number to be checked.
 * @returns A boolean value: true if the number is divisible by both 2 and 3, false otherwise.
 */
function isDevisableBy2or3(num: number): boolean {
    // Return true if the number is divisible by both 2 and 3
    return num % 2 === 0 && num % 3 === 0;
}

// Test cases
console.log(isDevisableBy2or3(6));  // Output: true (6 is divisible by both 2 and 3)
console.log(isDevisableBy2or3(9));  // Output: false (9 is divisible by 3 but not by 2)
