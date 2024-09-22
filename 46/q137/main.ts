// Attempt to execute code that may throw an error
try {
  // Throw a new error with a specific message
  throw new Error("Something went wrong"); 
} 
// Catch the error if it occurs
catch (error) {
  // Log the error message to the console
  console.log(error.message); // Output: Something went wrong
}
