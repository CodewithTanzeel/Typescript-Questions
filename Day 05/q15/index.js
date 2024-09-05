"use strict";
let guests = ['Yahya', "Haris", 'Shaheen', "Shahid"];
let unableToAttend = "Shaheen";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Fatimah ";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
