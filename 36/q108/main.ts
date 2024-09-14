function comparingStrings(text1: string, text2: string): boolean {
    return text1.toLowerCase() === text2.toLowerCase();
}   

console.log(comparingStrings("Ali", "ahmed")); // false
console.log(comparingStrings("Ahmed", "ahmed")); // true