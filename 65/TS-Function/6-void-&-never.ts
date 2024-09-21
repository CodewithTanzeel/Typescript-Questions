/****************
 * VOID & NEVER *
 ****************/

/**
 * The `greet` function takes a string parameter `name` and logs a greeting message.
 * It has a return type of `void`, which means the function doesn't return any value.
 * 
 * @param {string} name - The name to be greeted.
 * @returns {void} - No return value.
 */
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

/**
 * The `noReturnValue` function has no parameters and doesn't return anything.
 * The `void` return type signifies that it doesn't produce any value.
 * 
 * @returns {void} - No return value (implicitly returns `undefined`).
 */
function noReturnValue(): void {
  // This function does not return a value.
}

/**
 * The `throwError` function throws an error with a specified message.
 * It has a return type of `never`, which means it never successfully returns a value.
 * 
 * @param {string} message - The error message to throw.
 * @returns {never} - This function never returns a value.
 */
function throwError(message: string): never {
  throw new Error(message);
}

/**
 * The `infiniteLoop` function enters an infinite loop and never exits.
 * It has a return type of `never`, which means it doesn't terminate or return any value.
 * 
 * @returns {never} - This function never returns because of the infinite loop.
 */
function infiniteLoop(): never {
  while (true) {
    // This loop runs indefinitely.
  }
}

