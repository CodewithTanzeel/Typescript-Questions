function returnSum(num1: number, num2: string): number {
    return num1 + parseInt(num2); // turns string into number
}

console.log(returnSum(5, '10')); // Output: 15