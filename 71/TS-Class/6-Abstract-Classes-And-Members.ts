/********************************
 * ABSTRACT CLASSES AND MEMBERS *
 ********************************/

// Abstract class `AbstractItem` that defines a common structure and functionality
abstract class AbstractItem {
  // Private static property to keep track of the next available ID
  private static nextId: number = 1;

  // Constructor with parameter type annotations for `id` and `name`
  constructor(public id: number, protected name: string) {}

  // Static method to generate the next unique ID
  // This method increments and returns the current `nextId`
  static generateNextId(): number {
    return AbstractItem.nextId++;
  }

  // Abstract method that must be implemented by any class extending this abstract class
  abstract getItemInfo(): string;
}

// Concrete class `Item` that extends `AbstractItem` and provides an implementation for the abstract method
class Item extends AbstractItem {
  constructor(id: number, name: string) {
    super(id, name); // Call the constructor of the abstract class
  }

  // Implementation of the abstract method `getItemInfo`
  // Returns a formatted string containing the item's ID and name
  getItemInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Create instances of `Item` with unique IDs generated by the static method of `AbstractItem`
const item1: AbstractItem = new Item(AbstractItem.generateNextId(), "Widget");
const item2: AbstractItem = new Item(AbstractItem.generateNextId(), "Gadget");

// Access and log item information for the first item
console.log(item1.getItemInfo());
// Logs: "ID: 1, Name: Widget"

// Access and log item information for the second item
console.log(item2.getItemInfo());
// Logs: "ID: 2, Name: Gadget"
