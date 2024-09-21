/**
 * The `codeDelay` function demonstrates the use of a delay in executing a piece of code 
 * using `setTimeout`. This function logs a message to the console, then waits for a specified 
 * duration before executing a callback function.
 */
function codeDelay() {
    console.log("Before Delay"); // Log message before the delay

    // `setTimeout` schedules the execution of the callback function after a 2-second delay
    setTimeout(() => {
        console.log("After Delay of 2s"); // Log message after the delay
    }, 2000); // 2000 milliseconds (2 seconds)
}

// Calling the `codeDelay` function to execute the code
codeDelay();
