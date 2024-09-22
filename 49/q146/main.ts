/**
 * Main function that accepts a callback and provides an array of numbers to it.
 *
 * @param callback - A callback function that processes the array of numbers.
 */
function mainFunc(callback: (numbers: number[]) => void) {
    console.log("Filter Numbers");
    
    // Array of numbers to be processed
    const numbers: number[] = [1, 2, 3, 4, 5, 6];
    
    // Log the original array
    console.log(numbers); // Old array
    
    // Call the provided callback function, passing the array of numbers
    callback(numbers);
}

/**
 * Callback function to filter out even numbers and keep only odd numbers.
 *
 * @param numbers - An array of numbers to be filtered.
 */
function filterArray(numbers: number[]) {
    // Filter out even numbers, keeping only odd numbers
    let filter = numbers.filter((num) => num % 2 === 1);
    
    // Log the filtered array
    console.log(filter); // Filtered array
}

// Call mainFunc and pass filterArray as the callback function
mainFunc(filterArray);
