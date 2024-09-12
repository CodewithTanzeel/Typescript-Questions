type Shape = {
    kind: "circle" | "rectangle",
    radius?: number,
    length?: number,
    width?: number,
}

let circle: Shape = {
    kind: "circle",
    radius: 5,
  };

let rectangle: Shape = {
    kind: "rectangle",
    length: 12,
    width: 6,
}

console.log(circle)
console.log(rectangle)