let laptopPrice1 = [30000, 60000, 120000];
let laptopPrice2 = [20000, 30000, 80000];

let combine = [...laptopPrice1, ...laptopPrice2]
.sort((setA, setB) => setA - setB); // Ascending order

console.log(combine);