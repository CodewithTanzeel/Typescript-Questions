"use strict";
let magicians = ["Donald", "Rowan", "Narlay"]; // Global array
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}
show_magicians(magicians);
