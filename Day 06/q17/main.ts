let guests: string[] = ["Yahya", "Haris", "Zubaida", "Fatimah", "Shaheen", "Shahid"];

// Removing 3 guests from the end of the list
let removedGuest1 = guests.pop();
guests.pop();
guests.pop();

// Removing 2 guests from the beginning of the list
guests.shift();
guests.shift();

// Inviting only 2 guests
guests.forEach(guest => {
    console.log(`${guest} is invited to the party`);
})