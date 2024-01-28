// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

console.log("text", text);



let language = "JavaScript";

let text1 = "";
for (let x of language) {
text1 += x;
}

console.log("text1", text1);


let text2 = ""
const letters = new Set(["a","b","c"]);

for (const x of letters) {
  text2 += x;
}

console.log("text2", text2);