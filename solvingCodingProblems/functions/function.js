function f(a, b, c) {
  const g = (x, y) => x - y  
  return g(a * b, c);
}

const data = {
  x: [2, 4, 3],
  y: [6, 1, 5],
  z: [3, 3, 2]
}

let best = -Infinity;
let bestt = 10;

for (const k in data) {
//   Inside the loop, you have this specific line of code:
//    const [p, q, r] = data[k];

// This is called Array Destructuring. It tells JavaScript to take the array at the current key (k) and assign its elements to variables based on their position.

// p gets the value at index 0 (the 1st number).

// q gets the value at index 1 (the 2nd number).

// r gets the value at index 2 (the 3rd number).
  const [p, q, r] = data[k];
  //⬇1) cicle: on the first cicle that the function does, check if 'k' the same than 'Y'
  // since that on this first cicle they are not, the value is 3 because of the value of the r.
  // 2)cicle: on this one 'k' it is the same that 'y' which automacaily save the value of 8
  const c = (k === "y") ? 8 : r; //1) 3, 2) 8, 3) 2
//   console.log("for loop", c)
  best = Math.max(f(p + 1, q, c), best) 
  // 1 round) p = 2 + 1 = 3 * 4 = q = 12 - 3 = c = 9 = best
  // 2 round) p = 2 + 1 = 3 * 4 = q = 12 - 8 = c = 4 > 9 = best = false. best = 9
  // 3 round) p = 2 + 1 = 3 * 4 = q = 12 - 2 = c = 10 > 9 = best = true. result = 10
  
}

// console.log(best)


function calc(a, b, c) {
  const op = (x, y) => x + y;
  return op(a * 2, b - c);
}

const obj = {
  a: [3, 5, 1],
  b: [2, 8, 4]
};

let result = 0;

for (const key in obj) {
  const [x, y, z] = obj[key];
  const val = key === "a" ? z : y;
  result += calc(x, y, val);
}

// console.log(result);


function process(a, b, c) {
  const inner = (m, n) => m % n;
  return inner(a + b, c);
}

const ddata = {
  p: [10, 5, 3],
  q: [6, 4, 2]
};

let bbest = Infinity;

for (const k in ddata) {
  const [x, y, z] = ddata[k];
  const c = k === "q" ? 3 : z;
  bbest = Math.min(bbest, process(x, y, c));
}

// console.log(bbest);


function g(a, b, c) {
  const g = (x, y) => x * y;
  return g(a - b, c);
}

const nums = {
  m: [7, 2, 3],
  n: [5, 1, 4]
};

let total = 0;

for (const k in nums) {
  const [p, q, r] = nums[k];
  const c = k === "m" ? q : r;
  total += g(p, q, c);
}

// console.log(total);


function compute(a, b, c) {
  const helper = (x, y) => x - y;
  return helper(a ** 2, b + c);
}

const set = {
  x: [2, 3, 1],
  y: [4, 2, 5]
};

let max = -Infinity;

for (const key in set) {
  const [a, b, c] = set[key];
  const val = key === "x" ? b : c;
  max = Math.max(max, compute(a, b, val));
}

// console.log(max);


const jsonString = `
{
  "orders": [
    { "id": 1, "customer": "Ana", "total": 120 },
    { "id": 2, "customer": "Luis", "total": 80 },
    { "id": 3, "customer": "Ana", "total": 150 }
  ]
}
`;

const datta = JSON.parse(jsonString);

let sum = 0;

for (const order of datta.orders) {
  if (order.customer === "Ana") {
    sum += order.total;
  }
}

console.log(sum);