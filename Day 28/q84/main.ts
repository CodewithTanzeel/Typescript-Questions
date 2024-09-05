function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, 'TypeScript');
}

// Example usage
const sentence = "I love JavaScript because JavaScript is versatile.";
const newSentence = replaceJavaScriptWithTypeScript(sentence);
console.log(newSentence); // Output: "I love TypeScript because TypeScript is versatile."
