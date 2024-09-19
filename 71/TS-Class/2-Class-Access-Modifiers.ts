/***************************
 * CLASS ACCESS MODIFIERS: *
 ***************************/

// Class with `public` access modifier
class MyClassPublic {
  // The `name` property is public, meaning it can be accessed from anywhere
  public name: string;

  // Constructor with a `name` parameter, which is assigned to the public `name` property
  constructor(name: string) {
    this.name = name;
  }
}

// Creating an instance of `MyClassPublic` and accessing the public `name` property
const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name);
// Logs: "John", because the `name` property is publicly accessible

// Class with `private` access modifier
class MyClassPrivate {
  // The `secret` property is private, meaning it can only be accessed from within the class
  private secret: string;

  // Constructor initializes the private `secret` property
  constructor(secret: string) {
    this.secret = secret;
  }

  // Method to access the private property `secret` from within the class
  revealSecret() {
    console.log(this.secret);
  }
}

// Creating an instance of `MyClassPrivate`
const instancePrivate = new MyClassPrivate("My secret");
// console.log(instancePrivate.secret);
// This line would result in an error, as `secret` is private and not accessible outside the class
instancePrivate.revealSecret();
// Logs: "My secret", valid way to access the private property via a class method

// Class with `protected` access modifier
class Parent {
  // The `familyName` property is protected, meaning it can be accessed by the class and its subclasses
  protected familyName: string;

  // Constructor assigns the `familyName` to the protected property
  constructor(name: string) {
    this.familyName = name;
  }
}

// Child class extending the `Parent` class
class Child extends Parent {
  // Method to access the protected `familyName` from the subclass
  introduceFamily() {
    console.log(`Our family name is ${this.familyName}`);
  }
}

// Creating instances of the `Parent` and `Child` classes
const parentEx = new Parent("Smith");
const childEx = new Child("Johnson");

// console.log(parentEx.familyName);
// This would result in an error, as `familyName` is protected and cannot be accessed outside the class
childEx.introduceFamily();
// Logs: "Our family name is Johnson", valid way to access the protected property within a subclass
