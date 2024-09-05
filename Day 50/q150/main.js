// Synchronous Programming
console.log('Start'); // 1
function synchronousTask() {
    console.log('Synchronous Task'); // 3
}
synchronousTask(); // 2
console.log('End \n'); // 4
//Asynchronous Programming
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
