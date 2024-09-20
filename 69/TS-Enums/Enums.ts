/*********
 * ENUMS *
 *********/

/**
 * The `Days` enum defines a set of named constants for the days of the week.
 * Enums allow us to represent a collection of related values, which are automatically
 * assigned numeric values starting from 0 by default.
 */
enum Days {
  Sunday,     // Enum value for Sunday (0)
  Monday,     // Enum value for Monday (1)
  Tuesday,    // Enum value for Tuesday (2)
  Wednesday,  // Enum value for Wednesday (3)
  Thursday,   // Enum value for Thursday (4)
  Friday,     // Enum value for Friday (5)
  Saturday,   // Enum value for Saturday (6)
}

/**
* The constant `today` is set to the enum value for Wednesday.
* This represents the current day based on the `Days` enum.
*/
const today: Days = Days.Wednesday;  // Enum value for Wednesday (3)

/**
* Logs the current day by converting the numeric enum value back to its string equivalent.
* The `Days[today]` expression returns the string name associated with the enum value.
*/
console.log(`Today is ${Days[today]}`);  // Output: Today is Wednesday
