function makeAdder(valueToAdd: number): (number) => number {
    return function (number: number): number {
      return number + valueToAdd;
    };
  }
  
// adds 5
let addFive = makeAdder(5);
  
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
  