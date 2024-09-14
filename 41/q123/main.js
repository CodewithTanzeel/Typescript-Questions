function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char);
    }
}
// logUntilVowel("syzygy"); // No Vowel
logUntilVowel("Shumail"); // u -> first vowel
export {};
