var getRandomHexColor = function () {
    var getRandomHex = function () {
        var hex = Math.floor(Math.random() * 256).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return "#".concat(getRandomHex()).concat(getRandomHex()).concat(getRandomHex());
};
console.log(getRandomHexColor());
