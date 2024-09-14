"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
var Shop = /** @class */ (function () {
    function Shop(name, price) {
        this.name = name;
        this.price = price;
    }
    Shop.prototype.calculateProducts = function () {
        return this.price * Shop.Price;
    };
    Shop.prototype.displayNameAndPrice = function () {
        console.log("Product: ".concat(this.name, ", Price: ").concat(this.calculateProducts()));
    };
    Shop.Price = Math.floor(Math.random() * 50) + 1;
    return Shop;
}());
exports.Shop = Shop;
