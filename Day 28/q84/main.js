function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, 'TypeScript');
}
// Example usage
var sentence = "I love JavaScript because JavaScript is versatile.";
var newSentence = replaceJavaScriptWithTypeScript(sentence);
console.log(newSentence); // Output: "I love TypeScript because TypeScript is versatile."
