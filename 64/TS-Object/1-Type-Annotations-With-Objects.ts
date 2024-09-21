/*********************************
 * TYPE ANNOTATIONS WITH OBJECTS *
 *********************************/

/**
 * This object type definition specifies that `personExOne` is an object with the properties:
 * - `name` (string) – required.
 * - `age` (number) – required.
 * - `jobTitle` (string) – optional.
 * - `address` (object) – containing `street` and `city`, both of which are strings.
 * 
 * An initial object is later assigned that adheres to this type annotation.
 */
let personExOne: {
  name: string;
  age: number;
  jobTitle?: string; // Optional property.
  address: {
    street: string;
    city: string;
  };
};

// Assigning a valid object to `personExOne`
personExOne = {
  name: "Alice",
  age: 30,
  jobTitle: "Engineer", // This property is optional.
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};

/**
 * Another example of creating an object with the same structure using a different method.
 * This time, the object is initialized at the time of declaration, and follows the same
 * type annotation as `personExOne`.
 */
let personExTwo: {
  name: string;
  age: number;
  jobTitle?: string;
  address: {
    street: string;
    city: string;
  };
} = {
  name: "Alice",
  age: 30,
  jobTitle: "Engineer", // Optional field
  address: {
    street: "123 Main St",
    city: "Wonderland",
  },
};
