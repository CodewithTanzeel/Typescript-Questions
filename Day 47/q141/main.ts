// await

// The await keyword in JavaScript is used to pause the execution of an asynchronous function until a promise is resolved or rejected.

// Example use of the 'await' reserved word
// in asynchronous JavaScript

async function fetchData() {
  try {
    // Pauses here until the promise returned by fetch is resolved
    let response = await fetch("https://api.com/[api-data]");
    console.log(response);
}
 catch (error) {
    // If any of the promises are rejected, it catches the error here
    console.error("Error fetching data:", error);
  }
}

console.log(fetchData());
