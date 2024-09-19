/*******************  
* TYPE ASSERTIONS *  
*******************/  

let data: any = "1000";  // 'data' is of type 'any' and holds a string value "1000"

// Type assertion to treat "data" as a string and use string methods
console.log((data as string).repeat(3));  // The string "1000" is repeated 3 times, output: "100010001000"
