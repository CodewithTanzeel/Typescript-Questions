/**
 * Function to simulate fetching data asynchronously, where it either succeeds or fails randomly.
 * 
 * @param callback - A callback function that receives an error (if any) and the fetched data.
 *                   The callback has two parameters:
 *                   1. error: an Error object or null if no error occurred.
 *                   2. data: optional string that contains the fetched data.
 */
function fetchData(
  callback: (error: Error | null, data?: string) => void
): void {
  // Simulate an error case by creating an Error object
  const error = new Error("Failed to fetch data");
  
  // Simulated fetched data
  const data = "Some data";

  // Randomly determine if the operation succeeds or fails
  if (Math.random() > 0.5) {
    // Success case: invoke the callback with no error and the data
    callback(null, data);
  } else {
    // Failure case: invoke the callback with the error
    callback(error);
  }
}

// Invoke fetchData with a callback to handle the result
fetchData((error, data) => {
  // If an error occurred, log the error message
  if (error) {
    console.error(error.message);
  } 
  // If no error, log the fetched data
  else {
    console.log(data);
  }
});
