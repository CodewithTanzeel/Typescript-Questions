/*******************  
 * CLASS ACCESSORS *  
 *******************/

class ProductExAccessors {
  // Private property to store the price
  private _price: number;

  // Constructor with parameter type annotations for `id` and `name`
  // Both `id` and `name` are private properties
  constructor(private id: number, private name: string) {
    this._price = 0; // Default value for the price
  }

  // Public getter for the `_price` property
  // This allows controlled access to the `_price` property
  get price(): number {
    return this._price;
  }

  // Public setter for the `_price` property
  // Ensures that only non-negative values can be assigned to `_price`
  set price(newPrice: number) {
    if (newPrice >= 0) {
      this._price = newPrice;
    } else {
      console.log("Price cannot be negative.");
    }
  }

  // Method to return product information as a formatted string
  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
  }
}

// Create an instance of the `ProductExAccessors` class
const productEx = new ProductExAccessors(1, "Widget");

// Access product information using the `getProductInfo` method
console.log(productEx.getProductInfo()); 
// Logs: "ID: 1, Name: Widget, Price: $0", showing the default price

// Use the setter to update the price
productEx.price = 20.0;

// Access updated product information
console.log(productEx.getProductInfo()); 
// Logs: "ID: 1, Name: Widget, Price: $20"

// Attempting to set a negative price triggers the validation logic in the setter
productEx.price = -5; 
// Logs: "Price cannot be negative.", as negative prices are not allowed
