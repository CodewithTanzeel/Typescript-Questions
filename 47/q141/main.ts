// The await keyword in JavaScript is used to pause the execution
// of an asynchronous function until a promise is resolved or rejected.

async function fetchData() {
  try {
    // Pauses here until the promise returned by fetch is resolved
    let response = await fetch("https://api.com/[api-data]");

    // Logs the response once the fetch promise is resolved
    console.log("Response:", response);
  } catch (error) {
    // If any of the promises are rejected, it catches the error here
    console.error("Error fetching data:", error);
  }
}

// Calling the function
fetchData().then(() => {
  console.log("Fetch operation complete");
});

// The fetchData() function returns a promise, so you can log this
console.log(fetchData()); // Outputs: Promise<...>
