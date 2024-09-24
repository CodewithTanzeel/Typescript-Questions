// Function that logs characters of a string until the first vowel is encountered.
function logUntilVowel(str: string): void {
  // Define a string containing both lowercase and uppercase vowels.
  const vowels = "aeiouAEIOU";

  // Iterate over each character in the input string.
  for (const char of str) {

    // Check if the current character is a vowel by checking its inclusion in the 'vowels' string.
    if (vowels.includes(char)) {

      // If a vowel is found, log the message and the vowel character.
      console.log(`First vowel found: ${char}`);

      // Break the loop after logging the first vowel.
      break;
    }

    // If the current character is not a vowel, log the character.
    console.log(char);
  }
}

// Call the function with "Shumail", which logs characters until the first vowel 'u' is found.
logUntilVowel("Shumail"); // Logs 'S', 'h' and then "First vowel found: u"
