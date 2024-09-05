var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("Canada");
    }
    else {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
}
logCapitalOfCanada(countries);
