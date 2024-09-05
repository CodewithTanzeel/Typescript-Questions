export class Shop {
    static Price: number = Math.floor(Math.random() * 50) + 1;

    constructor(public name: string, public price: number) {}

    calculateProducts(): number{
        return this.price * Shop.Price
    }

    displayNameAndPrice(): void {
        console.log(`Product: ${this.name}, Price: ${this.calculateProducts()}`)
    }
};

