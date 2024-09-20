/*****************
 * LITERAL TYPES *
 *****************/

/**
 * The variable `direction` is declared with a literal type,
 * allowing it to hold one of the specified string values:
 * - "left"
 * - "right"
 * - "up"
 * - "down"
 */
let direction: "left" | "right" | "up" | "down"; // Literal type declaration

/**
 * The `setColor` function accepts a parameter `color` with a literal type,
 * which restricts it to one of the specified string values:
 * - "red"
 * - "green"
 * - "blue"
 *
 * This ensures that only these specific colors can be passed to the function,
 * enhancing type safety.
 */
function setColor(color: "red" | "green" | "blue") {
  // Function implementation would go here
  // ...
}
