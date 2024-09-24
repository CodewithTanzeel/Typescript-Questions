// Define an object 'squareRoot' with a property 'number' and a method 'calculateSqrt'.
let squareRoot = {
    number: 16, // The number for which the square root will be calculated.
  
    /**
     * Method to calculate the square root of the 'number' property.
     * @returns {number} - The square root of 'this.number'.
     */
    calculateSqrt: function (): number {
      return Math.sqrt(this.number); // Uses Math.sqrt() to return the square root of 'number'.
    },
  };
  
  // Output the result of calling 'calculateSqrt' method.
  console.log(squareRoot.calculateSqrt()); // Logs: 4
  