function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
