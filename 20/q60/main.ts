
// This profile sets itself up and can share info about the user
let Profile = (function () {
    // The user's details are kept inside
    let name = "Marjan";
    let age = 15;
  
    // This part shares the user's details
    return {
      display: function () {
        console.log(`Name: ${name}, Age: ${age}`);
      },
    };
  })();
  
  // Asking the profile to tell us about the user
  Profile.display(); // It says the user's name and age
  // We made a self-setup profile that can talk about the user.
  
                