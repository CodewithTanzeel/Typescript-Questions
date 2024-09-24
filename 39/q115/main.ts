function days(day: number): void {
    // Function to print the name of the day based on the provided number

    switch(day) {
        // Evaluating the input number 'day'
        case 1:
            console.log("Monday"); // If day is 1, log "Monday"
            break; // Exit the switch block

        case 2: 
            console.log("Tuesday"); // If day is 2, log "Tuesday"
            break; // Exit the switch block

        case 3:
            console.log("Wednesday"); // If day is 3, log "Wednesday"
            break; // Exit the switch block

        case 4: 
            console.log("Thursday"); // If day is 4, log "Thursday"
            break; // Exit the switch block

        case 5:
            console.log("Friday"); // If day is 5, log "Friday"
            break; // Exit the switch block

        case 6:
            console.log("Saturday"); // If day is 6, log "Saturday"
            break; // Exit the switch block

        case 7:
            console.log("Sunday"); // If day is 7, log "Sunday"
            break; // Exit the switch block

        default:
            console.log("Enter the number between 1 to 7"); // Log error message for invalid input
    }
}

// Example calls to the function
days(4); // Outputs: Thursday
days(10); // Outputs: Enter the number between 1 to 7
