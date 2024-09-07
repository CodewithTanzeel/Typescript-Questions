var guests = ["Ali", "Ashir", "zehra"];
//0      1         2
// Unfortunately I found a big table for inviting more guests
// Invite at the beginning
var add1 = guests.unshift("Zehra");
// Inviting at the middle
var add2 = guests.splice(guests.length / 2, 0, "Zubi");
// Inviting at the end
var add3 = guests.push("Saad");
guests.forEach(function (guest) {
    console.log("".concat(guest, ", would you like to come to my dinner party?"));
});
