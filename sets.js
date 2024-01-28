
// Method	Description
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	Returns an iterator with all the values in a Set
// Property	Description
// size	Returns the number of elements in a Set



const letters = new Set(["a","b","c"]);
letters.add("d");
letters.delete("a");
console.log("letters", letters);
console.log("letters.has('b')", letters.has("b"));

//ITERATION

letters.forEach((value, index, array) => {
    console.log("value", value);
    console.log("index", index);
    console.log("array", array);
})

for (const value of mySet) {
    console.log("value", value);
}

const myArray = Array.from(letters);
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// let text4 = "";
// .values returns an iterator (Set Iterator);
for (const x of letters.values()) {
    console.log("x", x);
}

console.log("size", letters.size);