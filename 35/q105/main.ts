function rollDice() {
  // Generate a random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice());
