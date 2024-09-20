/******************************
 * INTERFACE VS. TYPE ALIASES *
 ******************************/

/**
 * Declaration Syntax:
 * 
 * Interfaces and type aliases are both used to define the structure of objects. 
 * However, they differ slightly in their syntax and use cases.
 */

// Interface Example
/**
 * The `PersonExInterface` defines an interface for a person object.
 * 
 * Properties:
 * - `name`: A string representing the person's name.
 * - `age`: A number representing the person's age.
 */
interface PersonExInterface {
  name: string;  // Person's name
  age: number;   // Person's age
}

// Type Example
/**
 * The `PersonExType` defines a type alias for a person object, 
 * which has the same structure as `PersonExInterface`.
 */
type PersonExType = {
  name: string;  // Person's name
  age: number;   // Person's age
};

/**
 * Extending And Implementing:
 * 
 * Interfaces support extending other interfaces and can be implemented 
 * by classes. Type aliases allow intersection types (&) for combining structures.
 */

// Interface Extension Example
/**
 * The `AnimalExInterface` defines the structure for an animal object.
 */
interface AnimalExInterface {
  type: string;  // Animal type (e.g., dog, cat)
}

/**
 * The `Dog` interface extends `AnimalExInterface`, adding a `bark` method.
 */
interface Dog extends AnimalExInterface {
  bark(): void;  // Method to simulate a dog's bark
}

/**
 * The `Labrador` class implements the `Dog` interface, 
 * providing definitions for the `type` property and `bark` method.
 */
class Labrador implements Dog {
  type: string = "dog";  // Animal type is set to "dog"
  
  // Defines the bark method that logs a bark sound
  bark() {
    console.log("Woof!");
  }
}

// Type Extension Example
/**
 * The `AnimalExType` type alias defines the structure for an animal object.
 */
type AnimalExType = {
  type: string;  // Animal type (e.g., dog, cat)
};

/**
 * The `Monkey` type alias extends the `AnimalExType` using an intersection type.
 * It combines `AnimalExType` and adds a `bark` method.
 */
type Monkey = AnimalExType & {
  bark(): void;  // Method to simulate an animal bark
};

/**
 * Create an object `labrador` that adheres to the `Monkey` type alias.
 * 
 * Properties:
 * - `type`: The type of animal (set to "monkey").
 * - `bark()`: Method that logs a bark sound.
 */
const labrador: Monkey = {
  type: "monkey",  // Animal type set to "monkey"
  
  // Defines the bark method
  bark() {
    console.log("Woof!");
  },
};

/**
 * Compatibility:
 * 
 * Interfaces can be reopened and extended across multiple declarations, 
 * whereas types cannot.
 */

// Interface Compatibility Example
/**
 * The `Car` interface is declared twice, and both declarations are merged. 
 * This allows `myCar` to have properties from both declarations.
 */
interface Car {
  brand: string;  // Car brand
}

interface Car {
  model: string;  // Car model
}

/**
 * Create an object `myCar` that adheres to the `Car` interface, 
 * which includes both `brand` and `model` properties due to interface merging.
 */
const myCar: Car = {
  brand: "Toyota",  // Car brand is "Toyota"
  model: "Camry",   // Car model is "Camry"
};
