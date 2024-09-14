function comparingStrings(text1, text2) {
    return text1.toLowerCase() === text2.toLowerCase();
}
console.log(comparingStrings("Ali", "ahmed")); // false
console.log(comparingStrings("Ahmed", "ahmed")); // true
