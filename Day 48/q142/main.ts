const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});

promise.then((message) => console.log(message));
// After 2 seconds, "Hello, World!" will be logged to the console.