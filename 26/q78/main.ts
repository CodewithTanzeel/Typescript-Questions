// Function Declaration
function squareNumber(num: number): number {
    return num * num;
}

console.log(squareNumber(9)); // Output: 81

// Function Expression
const squareNum = function(num: number): number {
    return num * num;
};

console.log(squareNum(9)); // Output: 81
