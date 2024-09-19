/************************  
 * CLASS STATIC MEMBERS *  
 ************************/

class ProductStaticMembers {
  // Private static property to keep track of the next available ID
  private static nextId: number = 1;

  // Constructor with parameter type annotations for `id` and `name`
  constructor(private id: number, private name: string) {}

  // Static method to generate the next unique ID
  // This method is associated with the class itself, not with instances of the class
  static generateNextId(): number {
    return ProductStaticMembers.nextId++;  // Increment and return the current `nextId`
  }

  // Method to return product information as a formatted string
  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

// Generate unique IDs for products using the static method
const product1static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),  // Generate the next ID for the first product
  "Widget"
);

const product2static = new ProductStaticMembers(
  ProductStaticMembers.generateNextId(),  // Generate the next ID for the second product
  "Gadget"
);

// Access and log product information for the first product
console.log(product1static.getProductInfo()); 
// Logs: "ID: 1, Name: Widget"

// Access and log product information for the second product
console.log(product2static.getProductInfo()); 
// Logs: "ID: 2, Name: Gadget"
