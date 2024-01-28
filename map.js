// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	Description
// size	Returns the number of elements in a Map

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  fruits.set("strawberry", 1000);
  console.log(fruits);
  console.log(fruits.get("bananas"));
  console.log(fruits.set("bananas", 600));
  console.log(fruits);
  fruits.delete("oranges");
  console.log(fruits);
  console.log(fruits.has("apples"));
  console.log(fruits.has("oranges"));

  fruits.forEach((value, index, array) => {
    console.log("value", value);
    console.log("index", index);
    console.log("array", array);
  })

  for (const x of fruits.entries()) {
    console.log("x", x);
    console.log("x[0]", x[0]);
    console.log("x[1]", x[1]);
    // console.log("x", x);
  }

  for (const x of fruits.keys()) {
    console.log("x", x);
    // console.log("x", x.i);
    // console.log("x", x);
  }

  for (const x of fruits.values()) {
    console.log("x", x);
    // console.log("x", x.i);
    // console.log("x", x);
  }