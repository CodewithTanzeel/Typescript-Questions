/**
 * Represents a shop with products and pricing.
 */
export class Shop {
    // Static property for generating a random base price between 1 and 50
    static Price: number = Math.floor(Math.random() * 50) + 1;

    /**
     * Creates an instance of the Shop class.
     * @param {string} name - The name of the product.
     * @param {number} price - The price of the product.
     */
    constructor(public name: string, public price: number) {}

    /**
     * Calculates the product price by multiplying the instance price with the static Shop price.
     * @returns {number} - The total calculated product price.
     */
    calculateProducts(): number {
        return this.price * Shop.Price;
    }

    /**
     * Displays the product name and its calculated price in the console.
     * @returns {void}
     */
    displayNameAndPrice(): void {
        console.log(`Product: ${this.name}, Price: ${this.calculateProducts()}`);
    }
}
