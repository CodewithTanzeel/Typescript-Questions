// Define an object 'user' with properties: 'name', 'email', and 'id'
const user = {
  name: "Ahmed",
  email: "ahmed@gmail.com",
  id: 10202
};          

// Convert the 'user' object into a formatted JSON string using JSON.stringify
// 'null' is passed to not alter the replacer, and '4' indicates the indentation level for formatting
const jsonString = JSON.stringify(user, null, 4);

// Log the formatted JSON string to the console
console.log(jsonString);
// Output:
// {
//     "name": "Ahmed",
//     "email": "ahmed@gmail.com",
//     "id": 10202
// }
