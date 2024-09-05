function mainFunc(callback: (numbers: number[]) => void) {
    console.log("Filter Numbers");
    const numbers: number[] = [1,2,3,4,5,6];
    console.log(numbers) // old array
    callback(numbers);
};

function filterArray(numbers: number[]) {
    let filter = numbers.filter((num) => num % 2 === 1);
    console.log(filter) // filtered array
};

mainFunc(filterArray)