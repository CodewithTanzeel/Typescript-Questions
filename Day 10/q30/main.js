"use strict";
let usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(username => {
    if (username.includes("admin")) {
        console.log("Hello admin, would you like to see a somereport?");
    }
    else {
        console.log(`Hello ${username}, thank you for visiting here.`);
    }
});
