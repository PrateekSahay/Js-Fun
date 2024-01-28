
const arr1 = [1, "a", 2, 5, 4 , "d", "c"];
const numbers1 = [];
const strings1 = [];
arr1.forEach((value, index, array) => {
    if (typeof value == "number") {
        numbers1.push(value);
    }
    else {
        strings1.push(value)
    }
}) 
numbers1.sort((a, b) => a - b);
strings1.sort();
console.log([... numbers1, ...strings1]);

// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.