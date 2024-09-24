// Define an object 'myObject' with a 'property' and two methods.
const myObject = {
  property: "john", // A string property assigned to 'john'.

  /**
   * Method 'outerMethod' that logs the value of 'this.property'
   * and calls the 'innerMethod'.
   */
  outerMethod: function (): void {
    console.log(this.property); // Logs the 'property' value from 'myObject' ('john').

    // Define an inner arrow function 'innerMethod'.
    const innerMethod = () => {
      console.log(this.property); // Logs 'this.property' which still refers to 'myObject' due to arrow function binding.
    };

    innerMethod(); // Calls 'innerMethod'.
  },
};

// Invoke 'outerMethod', which will log 'john' twice.
myObject.outerMethod();
