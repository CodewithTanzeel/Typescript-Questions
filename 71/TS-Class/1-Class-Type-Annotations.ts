/**************************  
 * CLASS TYPE ANNOTATIONS *  
 **************************/

class Product {
  // Property type annotations to define the types for `id`, `name`, and `price`
  id: number;
  name: string;
  price: number;

  // Constructor with parameter type annotations for `id`, `name`, and `price`
  constructor(id: number, name: string, price: number) {
    // Assigning the constructor parameters to the class properties
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Method type annotations: this method returns a string
  getProductInfo(): string {
    // Returns a formatted string containing the product details
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

// Create an instance of the `Product` class
const product1 = new Product(1, "Widget", 20.0);  
// Instance created with id = 1, name = "Widget", price = 20.0

// Access the class properties and call the `getProductInfo` method
console.log(product1.getProductInfo()); 
// Logs: "ID: 1, Name: Widget, Price: $20"
