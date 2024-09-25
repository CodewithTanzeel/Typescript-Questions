/**
 * Simulates rolling a six-sided dice.
 * @returns A random integer between 1 and 6, inclusive.
 */
function rollDice() {
  // Generate a random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

// Test the function by logging the result of rolling the dice
console.log(rollDice());
