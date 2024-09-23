// Define an object 'user' with properties: 'name', 'email', and 'id'
let user = {
    name: "ahmed",
    email: "ahmed@gmail.com",
    id: 10202
  };
  
  // Convert the 'user' object into a JSON string using JSON.stringify
  let convert = JSON.stringify(user); 
  
  // Log the JSON string representation of the 'user' object
  console.log(convert); 
  // Output: {"name":"ahmed","email":"ahmed@gmail.com","id":10202}
  