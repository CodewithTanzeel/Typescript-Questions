/**
 * Function to compare two strings for equality, ignoring case.
 * @param text1 - The first string to compare.
 * @param text2 - The second string to compare.
 * @returns A boolean value: true if the strings are equal (case insensitive), false otherwise.
 */
function comparingStrings(text1: string, text2: string): boolean {
    // Convert both strings to lowercase and compare them
    return text1.toLowerCase() === text2.toLowerCase();
}

// Test cases
console.log(comparingStrings("Ali", "ahmed"));  // Output: false (different strings)
console.log(comparingStrings("Ahmed", "ahmed")); // Output: true (same string, case insensitive)
