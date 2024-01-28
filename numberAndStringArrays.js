// Input - > [1, "a", 2, 5, 4 , "d", "c"]
// Output -> [1,  2, 5, 4 , "a", "d", "c"]

const arr = [1, "a", 2, 5, 4 , "d", "c"];
const numbers = arr.filter(x => typeof x == "number");
const strings = arr.filter(x => typeof x != "number");
numbers.sort((a, b) => a - b);
strings.sort();
console.log([... numbers, ...strings]);