var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptopPrice1 = [30000, 60000, 120000];
var laptopPrice2 = [20000, 30000, 80000];
var combine = __spreadArray(__spreadArray([], laptopPrice1, true), laptopPrice2, true).sort(function (setA, setB) { return setA - setB; }); // Ascending order
console.log(combine);
