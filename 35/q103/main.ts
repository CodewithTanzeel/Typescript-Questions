/**
 * Function to return a boolean value based on a random number.
 * @returns A boolean value: true if the generated random number is greater than or equal to 0.5, false otherwise.
 */
function returnBoolean(): boolean {
    // Generate a random number between 0 and 1, and return true if it's >= 0.5, otherwise false
    return Math.random() >= 0.5;
}

// Test the function by logging the returned boolean value
console.log(returnBoolean());
