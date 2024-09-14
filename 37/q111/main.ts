function categorizeAge(age: number): string {
  if (age < 13) {
    return "child";
  }
   
  else if (age <= 19) {
    return "teenager";
  }

  else {
    return "adult";
  }
}

console.log(categorizeAge(12)); // child
console.log(categorizeAge(18)); // teenager
console.log(categorizeAge(25)); // adult
