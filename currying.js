
// function multiply (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }
const multiply = (x) => (y) => console.log(x * y);


const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3));

const multiplyByThree = multiply(3);
console.log(multiplyByThree(5));

// curry func that takes 5 args

// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4)(5));
// console.log(sum(1,2,3)(4,5));
// console.log(sum(1,2)(3,4,5));
// console.log(sum(1)(2,3,4,5));

const sum = (x) => (y) => y ? x + y : x;

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4)(5));
console.log(sum(1,2,3)(4,5));
console.log(sum(1,2)(3,4,5));
console.log(sum(1)(2,3,4,5));