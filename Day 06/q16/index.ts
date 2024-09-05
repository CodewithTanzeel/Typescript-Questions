let guests: string[] = ['Yahya', 'Haris', 'Fatimah', 'Shahid'];

// Unfortunately I found a big table for inviting more guests

// Invite at the beginning
let add1 = guests.unshift('Meraaj')

// Inviting at the middle
let add2 = guests.splice(guests.length/2,0,"Zubaida")

// Inviting at the end
let add3 = guests.push("Usman")

guests.forEach(guest => {
    console.log(`${guest}, would you like to come to my dinner party?`);
})