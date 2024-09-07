//QUESTION #15:
// Guest List
var guests = ["Atiqa", "Arham", "Ovais", "Imtisaal"];
var unableToAttend = "Ovais";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Drfaustus";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
