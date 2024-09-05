const user = {
  name: "Ahmed",
  email: "ahmed@gmail.com",
  id: 10202
};          

const jsonString = JSON.stringify(user, null, 4);

console.log(jsonString);
