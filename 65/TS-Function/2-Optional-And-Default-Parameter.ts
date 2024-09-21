/**********************************
 * OPTIONAL AND DEFAULT PARAMETERS *
 **********************************/

/**
 * The `greetOptional` function demonstrates the use of optional parameters.
 * - `name`: A required string parameter representing the person's name.
 * - `age`: An optional number parameter representing the person's age.
 * 
 * If the `age` is provided, the function includes it in the output.
 * If the `age` is omitted, the function only prints the person's name.
 */
function greetOptional(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

// Calling `greetOptional` with and without the optional parameter `age`
greetOptional("Alice");      // Output: "Hello, Alice!"
greetOptional("Bob", 30);    // Output: "Hello, Bob! You are 30 years old."

/**
 * The `greetDefault` function demonstrates the use of default parameters.
 * - `name`: A required string parameter representing the person's name.
 * - `age`: An optional number parameter with a default value of `25`.
 * 
 * If no `age` is provided when the function is called, the default value of `25` is used.
 */
function greetDefault(name: string, age: number = 25) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

// Calling `greetDefault` with and without the default parameter `age`
greetDefault("Alice");       // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30);     // Output: "Hello, Bob! You are 30 years old."
