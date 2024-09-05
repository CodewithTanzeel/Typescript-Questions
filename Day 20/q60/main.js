// This profile sets itself up and can share info about the user
var Profile = (function () {
    // The user's details are kept inside
    var name = "Marjan";
    var age = 15;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        },
    };
})();
// Asking the profile to tell us about the user
Profile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
