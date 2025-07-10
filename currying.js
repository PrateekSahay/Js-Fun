
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


function sum(...args) {
    const collected = [...args];
  
    function adder(...newArgs) {
      collected.push(...newArgs);
      return adder;
    }
  
    adder.valueOf = function () {
      return collected.reduce((a, b) => a + b, 0);
    };
  
    adder.toString = function () {
      return String(collected.reduce((a, b) => a + b, 0));
    };
  
    return adder;
  }
  