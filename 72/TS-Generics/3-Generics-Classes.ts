/********************
 * GENERICS CLASSES *
 ********************/

// Generic Class `User` with a default type parameter of `string`
class User<T = string> {
  constructor(public value: T) {
    // The class constructor initializes the `value` property of type T
  }

  // Method `show` takes an argument `msg` of type T and logs it along with the `value`
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

// Creating an instance of `User` with a type parameter `string`
let userOne = new User<string>("Elzero");
// The value property is of type string
console.log(userOne.value);
// Logs: "Elzero"

userOne.show("Message");
// Logs: "Message - Elzero", since both `msg` and `value` are strings

// Creating an instance of `User` with a type parameter that allows `number` or `string`
let userTwo = new User<number | string>(100);
// The value property is of type `number | string`, currently assigned a number
console.log(userTwo.value);
// Logs: 100

userTwo.show("Message");
// Logs: "Message - 100", where `msg` is a string and `value` is a number
