/**
 * A function that takes another function (callback) and passes a string to it.
 *
 * @param func - A callback function that accepts a string as an argument.
 */
function parenFunc(func: (str: string) => void) {
    // Call the provided callback function with the string "programming"
    func("programming");
}

/**
 * Callback function that converts the provided string to uppercase.
 *
 * @param str - A string to be converted to uppercase.
 */
function uppercase(str: string) {
    // Convert the string to uppercase and log it
    console.log(str.toUpperCase());
}

// Call parenFunc and pass uppercase as the callback function
parenFunc(uppercase);
