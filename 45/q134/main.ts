// Define a JSON string 'jsonString' representing an object with 'name', 'email', and 'id'
const jsonString = '{"name":"ahmed","email":"ahmed@gmail.com","id":10202}';

// Parse the JSON string into a JavaScript object using JSON.parse
const convertJsObj = JSON.parse(jsonString);

// Log the JavaScript object resulting from the parsed JSON string
console.log(convertJsObj);
// Output: { name: 'ahmed', email: 'ahmed@gmail.com', id: 10202 }
