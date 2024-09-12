var greeting = function (userName) {
    userName ? console.log("Hello", userName) : console.log("Hello anonymous");
};
greeting("Ahmed"); // Hello Ahmed
greeting(); // Hello anonymous
