/*****************************  
 * CLASS IMPLEMENT INTERFACE *  
 *****************************/

interface ProductInterface {
  // Method to return product information as a formatted string
  getProductInfo(): string;
}

class ProductImplementInterface implements ProductInterface {
  // Private static property to keep track of the next available ID
  private static nextId: number = 1;

  // Constructor with parameter type annotations for `id` and `name`
  constructor(private id: number, private name: string) {}

  // Static method to generate the next unique ID
  // This method increments and returns the `nextId` property
  static generateNextId(): number {
    return ProductImplementInterface.nextId++;
  }

  // Implementation of the `getProductInfo` method from `ProductInterface`
  // This method returns a formatted string containing product information
  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Generate unique IDs for products using the static method
const product1implement = new ProductImplementInterface(
  ProductImplementInterface.generateNextId(),  // Generate the next unique ID for the first product
  "Widget"
);

const product2implement = new ProductImplementInterface(
  ProductImplementInterface.generateNextId(),  // Generate the next unique ID for the second product
  "Gadget"
);

// Access and log product information for the first product
console.log(product1implement.getProductInfo()); 
// Logs: "ID: 1, Name: Widget"

// Access and log product information for the second product
console.log(product2implement.getProductInfo()); 
// Logs: "ID: 2, Name: Gadget"
