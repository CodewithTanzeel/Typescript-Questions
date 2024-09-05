var guests = ['Yahya', 'Haris', 'Fatimah', 'Shahid'];
// Unfortunately I found a big table for inviting more guests
// Invite at the beginning
var add1 = guests.unshift('Meraaj');
// Inviting at the middle
var add2 = guests.splice(guests.length / 2, 0, "Zubaida");
// Inviting at the end
var add3 = guests.push("Usman");
guests.forEach(function (guest) {
    console.log("".concat(guest, ", would you like to come to my dinner party?"));
});
