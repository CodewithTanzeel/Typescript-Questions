var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
promise.then(function (message) { return console.log(message); });
// After 2 seconds, "Hello, World!" will be logged to the console.
