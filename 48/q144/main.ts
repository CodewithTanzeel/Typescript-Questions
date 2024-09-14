// Creating three simple promises
let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000); // resolves after 1 second
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 2000); // resolves after 2 seconds
});

let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Third promise resolved");
  }, 3000); // resolves after 3 seconds
});

// Using Promise.all() to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises resolved");
    console.log(results); // Logs an array with the results of all promises
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });
