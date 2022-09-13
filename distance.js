let x1 = 1;
let x2 = 7;
let y1 = 3;
let y2 = 6;

let x3 = x2 - x1;
let y3 = y2 - y1;

let x3_squared = x3 ** 2;
let y3_squared = y3 ** 2;

let sum = x3_squared + y3_squared

let distance = Math.sqrt((((x2-x1)**2)+((y2-y1)**2)));

console.log(`The distance between coordinates (x1,y1) and (x2,y2) is ${distance}`);


