/**********************************
 * POLYMORPHISM & METHOD OVERRIDE *
 **********************************/

// Define an abstract class `AbstractEntity`
// This class serves as a blueprint for other entity classes
abstract class AbstractEntity {
  // Private static property to track the next available ID
  private static nextId: number = 1;

  // Protected constructor to initialize common properties `id` and `name`
  protected constructor(public id: number, protected name: string) {}

  // Static method to generate the next unique ID
  static generateNextId(): number {
    return AbstractEntity.nextId++;
  }

  // Abstract method that must be implemented by subclasses
  abstract getEntityInfo(): string;
}

// Create a concrete subclass `Entity` that extends `AbstractEntity`
// This class provides a specific implementation for the `getEntityInfo` method
class Entity extends AbstractEntity {
  constructor(id: number, name: string) {
    super(id, name); // Call the constructor of the abstract class
  }

  // Implementation of the `getEntityInfo` method
  // Returns a formatted string containing the entity's ID and name
  getEntityInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Create another concrete subclass `AnotherEntity` that also extends `AbstractEntity`
// This class provides a different implementation for the `getEntityInfo` method
class AnotherEntity extends AbstractEntity {
  constructor(id: number, name: string) {
    super(id, name); // Call the constructor of the abstract class
  }

  // Implementation of the `getEntityInfo` method with additional information
  getEntityInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
  }
}

// Generate unique IDs for entities using the static method from `AbstractEntity`
const entity1: AbstractEntity = new Entity(
  AbstractEntity.generateNextId(), // Generate the next unique ID for the first entity
  "Widget"
);

const entity2: AbstractEntity = new AnotherEntity(
  AbstractEntity.generateNextId(), // Generate the next unique ID for the second entity
  "Gadget"
);

// Demonstrate polymorphism by calling `getEntityInfo` on different concrete subclasses
console.log(entity1.getEntityInfo());
// Logs: "ID: 1, Name: Widget"

console.log(entity2.getEntityInfo());
// Logs: "ID: 2, Name: Gadget, Additional Info: ..."
