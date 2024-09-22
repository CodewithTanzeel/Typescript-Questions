// Creates a Promise that resolves after 2 seconds
const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!"); // Resolves the promise with "Hello, World!" after 2 seconds
  }, 2000);
});

// Handling the resolved promise
promise.then((message) => console.log(message)); // Logs the resolved message "Hello, World!" after 2 seconds

// After 2 seconds, "Hello, World!" will be logged to the console.
