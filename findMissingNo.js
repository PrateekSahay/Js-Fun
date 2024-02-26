// [1,2,3,4,5,6] N= 7
// [1,2,4,5,6,7,8] N = 8

const arr = [1,2,3,4,5,6];
const N = 7;

const length = arr.length;
// console.log(length)

let res1 = 0;
let res2 = 0;

for (let i = 1; i <= N; i++ ) {
    res1 = res1 + i;
}

console.log(res1)

for (let i = 0; i < arr.length; i++) {
    res2 = res2 + arr[i];  
}

console.log(res2)

console.log(res1 - res2);

//  XOR Method
//
// [1,2,3,4,5,6] N= 7
// [1,2,4,5,6,7,8] N = 8

// const arr = [1,2,3,4,5,6];
// const N = 7;

// const length = arr.length;
// // console.log(length)

// let res1 = 0;
// let res2 = 0;

// for (let i = 1; i <= N; i++ ) {
//     res1 = res1 ^ i;
// }

// console.log(res1)

// for (let i = 0; i < arr.length; i++) {
//     res2 = res2 ^ arr[i];  
// }

// console.log(res2)

// console.log(res1 - res2);
// console.log(res1 ^ res2);