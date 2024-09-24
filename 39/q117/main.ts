function evaluateExpression(expression) {
    // Function to evaluate the given expression and log corresponding messages

    switch (expression) {
        // Evaluating the input 'expression'
        case 'apple':
            console.log('The expression is apple.'); // Log message for apple
            break; // Exit the switch block
        
        case 'banana':
            console.log('The expression is banana.'); // Log message for banana
            break; // Exit the switch block
        
        case 'cherry':
            console.log('The expression is cherry.'); // Log message for cherry
            break; // Exit the switch block
        
        default:
            console.log('The expression does not match any case.'); // Log message for unmatched cases
            break; // Exit the switch block
    }
}

// Example calls to the function
evaluateExpression('apple');  // Output: The expression is apple.
evaluateExpression('orange'); // Output: The expression does not match any case.
