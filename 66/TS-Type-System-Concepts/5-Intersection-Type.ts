/*********************
 * INTERSECTION TYPE *
 *********************/

/**
 * The `FirstType` type is defined as an object with two properties:
 * - `name`: A string representing the person's name.
 * - `age`: A number representing the person's age.
 */
type FirstType = {
  name: string;
  age: number;
};

/**
 * The `SecondType` type is defined as an object with two properties:
 * - `address`: A string representing the person's address.
 * - `phone`: A string representing the person's phone number.
 */
type SecondType = {
  address: string;
  phone: string;
};

/**
 * The `CombinedType` type is created using an intersection type,
 * combining the properties of `FirstType` and `SecondType`.
 * This means that `CombinedType` will have all properties from both types.
 */
type CombinedType = FirstType & SecondType;

/**
 * The `person` constant is created as an object adhering to the `CombinedType`.
 * It includes properties from both `FirstType` and `SecondType`.
 */
const person: CombinedType = {
  name: "John Doe", // Name from FirstType
  age: 30, // Age from FirstType
  address: "123 Main St", // Address from SecondType
  phone: "123-456-7890", // Phone from SecondType
};
