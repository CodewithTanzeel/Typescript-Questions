function evaluateExpression(expression) {
    switch (expression) {
        case 'apple':
            console.log('The expression is apple.');
            break;
        case 'banana':
            console.log('The expression is banana.');
            break;
        case 'cherry':
            console.log('The expression is cherry.');
            break;
        default:
            console.log('The expression does not match any case.');
            break;
    }
}
evaluateExpression('apple'); // Output: The expression is apple.
evaluateExpression('orange'); // Output: The expression does not match any case.
