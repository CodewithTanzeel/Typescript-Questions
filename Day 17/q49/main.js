var hobbies = function () {
    var hobby = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby[_i] = arguments[_i];
    }
    // Looping an array
    hobby.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, ". "));
    });
};
hobbies("Playing", "Reading", "Writing", "gardening");
