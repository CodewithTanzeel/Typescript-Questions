let guests: string[] = ["Ali", "Ashir", "zehra"];
                        //0      1         2
// Unfortunately I found a big table for inviting more guests

// Invite at the beginning
let add1 = guests.unshift("Zehra");

// Inviting at the middle
let add2 = guests.splice(guests.length / 2, 0, "Zubi");

// Inviting at the end
let add3 = guests.push("Saad");

guests.forEach((guest) => {
  console.log(`${guest}, would you like to come to my dinner party?`);
});
