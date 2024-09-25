/**
 * Generates a random hexadecimal color string.
 * @returns A string representing a hexadecimal color in the format #RRGGBB.
 */
const getRandomHexColor = (): string => {
  /**
   * Generates a random hexadecimal value.
   * @returns A two-character hexadecimal string.
   */
  const getRandomHex = (): string => {
    // Generate a random number between 0 and 255, convert it to hexadecimal
    const hex = Math.floor(Math.random() * 256).toString(16);
    
    // If the hex string is only one character long, pad it with a leading zero
    return hex.length === 1 ? "0" + hex : hex;
  };

  // Construct the full hexadecimal color string by concatenating three random hex values
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
};

// Test the function by logging a random hexadecimal color
console.log(getRandomHexColor());
