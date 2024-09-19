/***************************  
 * GENERICS AND INTERFACES *  
 ***************************/

// Interface definition for `Book`
interface Book {
  itemType: string;  // Defines the type of item, e.g., "Book"
  title: string;     // Title of the book
  isbn: number;      // Unique ISBN number for the book
}

// Interface definition for `Game`
interface Game {
  itemType: string;  // Defines the type of item, e.g., "Game"
  title: string;     // Title of the game
  style: string;     // Genre or style of the game (e.g., "Action")
  price: number;     // Price of the game
}

// Generic Class `Collection`, which works with a type `T`
class Collection<T> {
  public data: T[] = [];  // Array to hold a collection of items of type `T`

  // Method to add an item of type `T` to the collection
  add(item: T): void {
    this.data.push(item);  // Adds the item to the `data` array
  }
}

// Creating an instance of `Collection` with the type parameter `Book`
let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });  // Adds a `Book` object
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });  // Adds another `Book` object
console.log(itemOne);  // Logs the `Collection` of `Book` items

// Creating an instance of `Collection` with the type parameter `Game`
let itemTwo = new Collection<Game>();
itemTwo.add({
  itemType: "Game",  // Adds a `Game` object
  title: "Uncharted",
  style: "Action",
  price: 150,
});
console.log(itemTwo);  // Logs the `Collection` of `Game` items
