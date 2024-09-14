// Creates a Promise that either resolves or rejects 
// based on a condition
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    // Randomly choose success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    // Handles a successful resolution
    .then(function (result) { return console.log(result); })
    // Handles a rejection
    .catch(function (error) { return console.log(error.message); });
// This code will randomly log either "Success!"
// or "Failure" based on the outcome of the promise.
