//QUESTION #15:

// Guest List
let guests: string[] = ["Atiqa", "Arham", "Ovais", "Imtisaal"];

let unableToAttend = "Ovais";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Drfaustus";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach((guest) => {
  console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
