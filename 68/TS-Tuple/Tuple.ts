/*********
 * TUPLE *
 *********/

/**
 * The `article` variable is defined as a tuple with three elements:
 * - A number representing an ID.
 * - A string representing the title of the article.
 * - A boolean indicating whether the article is published.
 * 
 * The `readonly` modifier prevents modification of the tuple, meaning
 * no elements can be added or changed after initialization.
 */
let article: readonly [number, string, boolean] = [11, "Title One", true]; // Tuple initialization

/**
 * Attempting to assign a new tuple value to the `article` variable. 
 * This will cause an error because `readonly` prevents reassignment.
 * The following line is commented out to avoid the error.
 */
// article = [12, "Title Two", false]; // Error due to readonly tuple

/**
 * Attempting to push a new element into a readonly tuple would result in a compile-time error,
 * so the following line is commented out for demonstration purposes.
 */
// article.push(100); // Error: push is not allowed on a readonly tuple

// Output the current tuple
console.log(article);  // Logs the tuple: [11, "Title One", true]

/**
 * Destructuring the tuple into individual variables.
 * This allows you to access the tuple elements as separate variables:
 * - `id`: The first element (number).
 * - `title`: The second element (string).
 * - `published`: The third element (boolean).
 */
const [id, title, published] = article;

// Output the individual variables
console.log(id);         // Logs: 11 (ID)
console.log(title);      // Logs: "Title One" (Title)
console.log(published);  // Logs: true (Published status)
