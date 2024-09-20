/******************
 * NULLABLE TYPES *
 ******************/

/**
 * The variable `username` is declared with a union type that allows it to hold
 * either a `string` or `null`. It is initially assigned a string value.
 */
let username: string | null = "Glicher"; // The variable can hold a string or null

/**
 * The variable `ageEx` is declared with a union type that allows it to hold
 * either a `number` or `null`. It is initially assigned `null`, indicating
 * that the age is not yet set.
 */
let ageEx: number | null = null; // The variable can hold a number or null

/**
 * The `greetUser` function accepts a parameter `username` that can be either
 * a `string` or `null`. This function demonstrates handling nullable types.
 * 
 * Inside the function:
 * - If `username` is `null`, it logs a greeting for a guest.
 * - Otherwise, it logs a personalized greeting using the provided username.
 */
function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Guest!");  // Output for null username
    } else {
        console.log(`Hello, ${username}!`);  // Output for valid username
    }
}

// Calling the `greetUser` function with a valid username
greetUser("Glitcher"); // Output: Hello, Glitcher!

// Calling the `greetUser` function with a null value
greetUser(null);     // Output: Hello, Guest!
