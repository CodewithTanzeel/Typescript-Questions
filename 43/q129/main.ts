// Demonstrating 'this' in traditional vs. arrow functions
const traditionalVsArrow = {
  value: "traditionalVsArrow value", // Property of the object

  /**
   * Traditional function that logs the value of 'this'.
   * In traditional functions, 'this' refers to the object from which the function was called.
   */
  traditionalFunction: function () {
    console.log("Traditional function:", this.value);
  },

  /**
   * Arrow function that logs the value of 'this'.
   * In arrow functions, 'this' is lexically bound, meaning it refers to the surrounding scope where the function was defined.
   */
  arrowFunction: () => {
    console.log("Arrow function:", this.value);
  },
};

// Calling the traditional function
traditionalVsArrow.traditionalFunction();
// Logs "traditionalVsArrow value"

// Calling the arrow function
traditionalVsArrow.arrowFunction();
// Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined
// in traditional functions versus arrow functions.
