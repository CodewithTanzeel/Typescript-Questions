// Define an object 'person' with a property 'personName' and a method 'getName'.
let person = {
    personName: "", // Initially, personName is an empty string.
  
    /**
     * Method to update 'personName' with the provided 'name'.
     * @param {string} name - The name to set as 'personName'.
     * @returns {string} - The updated 'personName'.
     */
    getName: function (name: string): string {
      return (this.personName = name); // Assigns the 'name' to 'personName' and returns it.
    },
  };
  
  // Call the 'getName' method with the argument "Marjan".
  person.getName("Marjan");
  
  // Output the updated value of 'personName'.
  console.log(person.personName); // Logs: "Marjan"
  