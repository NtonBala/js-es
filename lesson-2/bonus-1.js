'use strict';

let a = 11;
let b = 7;

a = b - a;
b = b - a;
a = b + a;

console.log('a:', a, 'b:', b);

// With destructuring:
// function swapParams(...[b, a]) {
//   console.log(a, b);
// }
