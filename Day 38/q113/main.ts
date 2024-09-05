const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");

console.log(countries);

function logCapitalOfCanada(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log("Canada");
  } else {
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  }
}

logCapitalOfCanada(countries);
