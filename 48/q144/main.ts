// Creating three simple promises
let promise1 = new Promise((resolve) => {
  // Simulate async operation that resolves after 1 second
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});

let promise2 = new Promise((resolve) => {
  // Simulate async operation that resolves after 2 seconds
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 2000);
});

let promise3 = new Promise((resolve) => {
  // Simulate async operation that resolves after 3 seconds
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 3000);
});

// Using Promise.all() to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // This block executes once all promises resolve successfully
    console.log("All promises resolved");
    console.log(results); // Logs an array containing the results of all promises
  })
  .catch((error) => {
    // This block executes if any of the promises reject
    console.error("One of the promises rejected:", error);
  });
