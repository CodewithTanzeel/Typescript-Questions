function removeLastElement(arr: string[]): string | undefined {
    return arr.pop();
}

const fruits: string[] = ['mango', 'watermelon', 'orange', 'grapes'];
console.log(fruits)
console.log(removeLastElement(fruits)) // grapes