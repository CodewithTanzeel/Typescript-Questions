// Loop through numbers 1 to 10 using a 'for' loop.
for (let i = 1; i <= 10; i++) {
    
    // If the value of 'i' is 5, skip the current iteration using 'continue'.
    if (i === 5) {
        continue; // Skip the rest of the loop when 'i' equals 5.
    }

    // Log the value of 'i' for all other numbers.
    console.log(i); // Prints numbers from 1 to 10, except 5.
}
