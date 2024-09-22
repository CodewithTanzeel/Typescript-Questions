// Creates a Promise that either resolves or rejects based on a condition
let conditionalPromise = new Promise<string>((resolve, reject) => {
  const success = Math.random() > 0.5; // Generates a random value to determine success or failure
  // Randomly choose success or failure
  if (success) {
    resolve("Success!"); // Resolve the promise if success is true
  } else {
    reject(new Error("Failure")); // Reject the promise if success is false
  }
});

// Handling the resolved or rejected state of the promise
conditionalPromise
  // Handles a successful resolution
  .then((result) => console.log(result)) // Logs "Success!" if resolved

  // Handles a rejection
  .catch((error) => console.log(error.message)); // Logs "Failure" if rejected

// This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
