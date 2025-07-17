// ✅ 1. map() – Creates new array
const nums1 = [1, 2, 3];
const doubled = nums1.map(n => n * 2); // [2, 4, 6]

// ✅ 2. filter() – Creates new array
const nums2 = [1, 2, 3, 4];
const evens = nums2.filter(n => n % 2 === 0); // [2, 4]

// ✅ 3. find() – Returns first matching item (not array)
const users = [{ id: 1 }, { id: 2 }];
const user = users.find(u => u.id === 2); // { id: 2 }

// ✅ 4. findIndex() – Returns index (not item)
const items = ['a', 'b', 'c'];
const idx = items.findIndex(i => i === 'b'); // 1

// ✅ 5. some() – Returns boolean
const hasEven = [1, 3, 4].some(n => n % 2 === 0); // true

// ✅ 6. every() – Returns boolean
const allEven = [2, 4, 6].every(n => n % 2 === 0); // true

// ✅ 7. includes() – Returns boolean
const list1 = [1, 2, 3];
const has2 = list1.includes(2); // true

// ✅ 8. slice() – Creates new array (does not mutate) -> start -> end - 1
const arr1 = [1, 2, 3, 4];
const part = arr1.slice(1, 3); // [2, 3]

// ✅ 9. splice() – Mutates original array
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// index	Required. The index (position) to add or remove items.  A negative value counts from the end of the array.
// count	Optional.  Number of items to be removed. 
// item1, ...,	Optional. The new elements(s) to be added.
const arr2 = [1, 2, 3];
arr2.splice(1, 1); // [1, 3]
arr2.splice(1, 0, 99); // [1, 99, 3]

// ✅ 10. sort() – Mutates original array
const nums3 = [4, 2, 5, 1];
nums3.sort((a, b) => a - b); // [1, 2, 4, 5]

// ✅ 11. reverse() – Mutates original array
const arr3 = [1, 2, 3];
arr3.reverse(); // [3, 2, 1]

// ✅ 12. reduce() – Reduces to single value
const sum = [1, 2, 3].reduce((acc, val) => acc + val, 0); // 6

// ✅ 13. concat() – Creates new array
const a = [1, 2];
const b = [3, 4];
const merged = a.concat(b); // [1, 2, 3, 4]

// ✅ 14. flat() – Creates new array
const nested = [1, [2, [3]]];
const flat1 = nested.flat(2); // [1, 2, 3]

// ✅ 15. flatMap() – Creates new array
const nums4 = [1, 2];
const result = nums4.flatMap(n => [n, n * 2]); // [1, 2, 2, 4]

// ✅ 16. fill() – Mutates original array
const filled = new Array(3).fill(0); // [0, 0, 0]

// ✅ 17. copyWithin() – Mutates original array
const arr4 = [1, 2, 3, 4];
arr4.copyWithin(1, 2); // [1, 3, 4, 4]

// ✅ 18. push() – Mutates original array, adds to end
const arr5 = [1, 2];
arr5.push(3); // [1, 2, 3]

// ✅ 19. pop() – Mutates original array, removes from end
arr5.pop(); // [1, 2]

// ✅ 20. unshift() – Mutates original array, adds to start
arr5.unshift(0); // [0, 1, 2]

// ✅ 21. shift() – Mutates original array, removes from start
arr5.shift(); // [1, 2]

// ✅ 22. Object.keys() – Gets keys from object
const obj = { a: 1, b: 2 };
const keys = Object.keys(obj); // ['a', 'b']

// ✅ 23. Object.values() – Gets values from object
const values = Object.values(obj); // [1, 2]

// ✅ 24. Array.from() – Converts iterable to array
const str = 'abc';
const chars = Array.from(str); // ['a', 'b', 'c']

// ✅ 25. Set() for uniqueness – Creates new array
const list2 = [1, 2, 2, 3];
const unique = [...new Set(list2)]; // [1, 2, 3]

// add element at a position
// Add 99 at index 1 (second position)
const arr = [10, 20, 30, 40];
arr.splice(1, 0, 99);

console.log(arr); // [10, 99, 20, 30, 40]
const newArr = [...arr.slice(0, 1), 99, ...arr.slice(1)];

// remove element at a position
// Remove element at index 2 (value 30)
const arr22 = [10, 20, 30, 40];
arr22.splice(2, 1);

console.log(arr); // [10, 20, 40]


// ===========================================
// 📚 JavaScript Array Creation – Guide + Examples
// ===========================================


// 🔹 1. ✅ Array Literal – Most Common Way
const arr21 = [1, 2, 3, 4];
console.log("Array Literal:", arr21);
// ✔️ Use this for almost everything — concise, readable, and efficient


// 🔹 2. 🔹 Using new Array(length)
const arr25 = new Array(5);
console.log("New Array (empty slots):", arr25); // [ <5 empty items> ]
// ⚠️ Use only if you're going to immediately fill or map it
// ❌ Avoid if you expect 0-filled or defined values


// 🔹 3. ✅ Using Array.of(...elements)
const arr26 = Array.of(5); // [5] ← unlike `new Array(5)` which creates 5 empty slots
console.log("Array.of(5):", arr26);
// ✔️ Use when creating a single-element array safely


// 🔹 4. ✅ Using Array.from(iterable, mapFn)
const arr27 = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
const arr28 = Array.from({ length: 4 }, (_, i) => i * 2); // [0, 2, 4, 6]
console.log("Array.from string:", arr27);
console.log("Array.from mapFn:", arr28);
// ✔️ Best for converting iterable or creating arrays with map logic


// 🔹 5. 🔹 Spread syntax [...iterable]
const arr6 = [..."abc"]; // ['a', 'b', 'c']
const arr7 = [...new Set([1, 2, 2, 3])]; // [1, 2, 3]
console.log("Spread from string:", arr6);
console.log("Spread from Set:", arr7);
// ✔️ Great for cloning, converting iterables, deduplicating


// 🔹 6. 🔹 Using fill()
const arr8 = new Array(3).fill(0); // [0, 0, 0]
console.log("Array filled with 0s:", arr8);
// ✔️ Use for prefilled arrays like placeholders, matrices, etc.


// 🔹 7. 🔹 Using push()
const arr9 = [];
arr9.push(1);
arr9.push(2);
console.log("Push elements:", arr9);
// ✔️ Good for dynamic building inside loops


// 🔹 8. 🔹 Using concat()
const a1 = [1, 2], b1 = [3, 4];
const arr10 = a1.concat(b1); // [1, 2, 3, 4]
console.log("Concatenated array:", arr10);
// ✔️ Use to merge two or more arrays (use spread as alternative)


// 🔹 9. ✅ Using map/filter to generate new arrays
const arr11 = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
const arr12 = [1, 2, 3, 4, 5].filter(x => x % 2 === 0); // [2, 4]
console.log("Mapped array:", arr11);
console.log("Filtered array:", arr12);
// ✔️ Use for transformation or conditional arrays


// 🔹 10. ✅ Using flatMap()
const arr13 = [1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
console.log("FlatMapped array:", arr13);
// ✔️ Best for flattening + mapping in one step


// 🔹 11. ✅ Empty Array Variants
const empty1 = [];
const empty2 = Array.of();      // []
const empty3 = new Array(0);    // []
console.log("Empty arrays:", empty1, empty2, empty3);


// ===========================================
// 🧠 Summary – When to Use What
// ===========================================

/*
Array Creation Method       | Use Case
----------------------------|----------------------------
[]                          | ✅ Default way – always prefer this
new Array(length)           | ⚠️ Use for allocation, fill immediately
Array.of(1)                 | ✅ Safer alternative to new Array(1)
Array.from(iterable)        | ✅ Converting strings, sets, or filling logic
[...iterable]               | ✅ Clone or convert any iterable
Array(n).fill(x)            | ✅ Prefill with same value (placeholders)
[].push(x)                  | ✅ Dynamic, when building in loops
a.concat(b)                 | ✅ Merge arrays (or use [...a, ...b])
array.map/filter            | ✅ Transform or conditionally create arrays
flatMap()                   | ✅ Flatten + map in one pass
*/

// ===========================================
// ✅ Bonus: Create a 2D Array
// ===========================================

const rows = 3, cols = 4;
const grid = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => 0)
);
console.log("2D Array (3x4):", grid);
// [[0,0,0,0], [0,0,0,0], [0,0,0,0]]


