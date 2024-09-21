// Synchronous Programming
// Log a message indicating the start of the synchronous execution
console.log("Start"); // 1

/**
 * Function definition for synchronousTask. 
 * This function logs a message to the console.
 */
function synchronousTask() {
  console.log("Synchronous Task"); // 3
}

// Calling the synchronousTask function to execute it
synchronousTask(); // 2

// Log a message indicating the end of the synchronous execution
console.log("End \n"); // 4

// Asynchronous Programming
// Log a message before setting up the asynchronous operation
console.log("Before asynchronous operation"); // Logs immediately

// Schedule a callback function to be executed after a 1-second delay (1000 milliseconds)
setTimeout(() => {
  console.log("Asynchronous operation completed"); // Logs after the delay
}, 1000);

// Log a message indicating that the asynchronous operation has been set up
console.log("After asynchronous operation setup"); // Logs immediately after setting up the timeout
