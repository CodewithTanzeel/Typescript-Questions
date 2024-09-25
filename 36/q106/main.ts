/**
 * Function to check if a given year is a leap year.
 * A leap year is:
 * - Divisible by 4, but not divisible by 100, unless it's also divisible by 400.
 * @param year - The year to be checked.
 * @returns A boolean value: true if the year is a leap year, false otherwise.
 */
function isLeapYear(year: number): boolean {
  // Return true if the year is divisible by 4 and not divisible by 100, or divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Test cases
console.log(isLeapYear(2000)); // Output: true (2000 is a leap year)
console.log(isLeapYear(1999)); // Output: false (1999 is not a leap year)
