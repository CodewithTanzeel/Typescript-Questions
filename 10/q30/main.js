var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username.includes("admin")) {
        console.log("Hello admin, would you like to see a some report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for visiting here."));
    }
});
