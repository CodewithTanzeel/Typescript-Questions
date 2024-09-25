/**
 * Function to categorize a person's age group based on the given age.
 * @param age - The age to be categorized.
 * @returns A string indicating the age group: "child", "teenager", or "adult".
 */
function categorizeAge(age: number): string {
  // Check if the age is less than 13 to categorize as a "child"
  if (age < 13) {
    return "child";
  }
  
  // Check if the age is between 13 and 19 (inclusive) to categorize as a "teenager"
  else if (age <= 19) {
    return "teenager";
  }

  // If the age is above 19, categorize as an "adult"
  else {
    return "adult";
  }
}

// Test cases
console.log(categorizeAge(12)); // Output: child
console.log(categorizeAge(18)); // Output: teenager
console.log(categorizeAge(25)); // Output: adult
