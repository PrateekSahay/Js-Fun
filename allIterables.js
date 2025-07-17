// 🔁 1. Array Iteration
const arr = ['a', 'b', 'c'];

// ✅ for loop
for (let i = 0; i < arr.length; i++) {
  console.log('for loop:', arr[i]);
}

// ✅ for...of loop
for (const item of arr) {
  console.log('for...of:', item);
}

// ✅ forEach
arr.forEach(item => {
  console.log('forEach:', item);
});

// ✅ map (useful for transformation)
const uppercased = arr.map(item => item.toUpperCase());
console.log('map():', uppercased); // ['A', 'B', 'C']

// ⚠️ for...in (not recommended for arrays)
for (const i in arr) {
  console.log('for...in:', arr[i]); // May include inherited props
}

console.log('-------------------------');


// 🧾 2. Object Iteration
const obj = { name: "Alice", age: 30 };

// ✅ for...in (with hasOwnProperty for safety)
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log('for...in:', key, obj[key]);
  }
}

// ✅ Object.keys
Object.keys(obj).forEach(key => {
  console.log('Object.keys():', key);
});

// ✅ Object.values
Object.values(obj).forEach(value => {
  console.log('Object.values():', value);
});

// ✅ Object.entries
for (const [key, value] of Object.entries(obj)) {
  console.log('Object.entries():', key, value);
}

console.log('-------------------------');


// 📜 3. String Iteration
const str = "abc";

// ✅ for loop
for (let i = 0; i < str.length; i++) {
  console.log('for loop:', str[i]);
}

// ✅ for...of
for (const ch of str) {
  console.log('for...of:', ch);
}

// ✅ split + forEach
str.split('').forEach(ch => {
  console.log('split + forEach:', ch);
});

console.log('-------------------------');


// 🧺 4. Set Iteration
const set = new Set(['a', 'b', 'c']);

// ✅ for...of
for (const val of set) {
  console.log('Set for...of:', val);
}

// ✅ forEach
set.forEach(val => {
  console.log('Set forEach:', val);
});

// ✅ Spread into array + forEach
[...set].forEach(val => {
  console.log('Set spread + forEach:', val);
});

console.log('-------------------------');


// 🗺️ 5. Map Iteration
const map = new Map([
  ['name', 'Alice'],
  ['age', 30]
]);

// ✅ for...of
for (const [key, value] of map) {
  console.log('Map for...of:', key, value);
}

// ✅ forEach
map.forEach((value, key) => {
  console.log('Map forEach:', key, value);
});

// ✅ map.keys()
for (const key of map.keys()) {
  console.log('Map keys():', key);
}

// ✅ map.values()
for (const value of map.values()) {
  console.log('Map values():', value);
}

// ✅ Spread
const spreadMap = [...map];
console.log('Map spread:', spreadMap); // [['name', 'Alice'], ['age', 30]]
