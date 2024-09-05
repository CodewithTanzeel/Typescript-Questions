let magicians: string[] = ["Donald", "Rowan", "Narlay"]; // Global array

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {

        console.log(`${magician}`);
    });
}

show_magicians(magicians);