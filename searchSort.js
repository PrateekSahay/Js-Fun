// ==============================
// 🔎 JavaScript Sort + Search Utilities
// ==============================

const nums = [10, 3, 7, 5, 100];
const names = ['Alice', 'Bob', 'Charlie', 'David'];
const users = [
  { id: 1, name: 'Alice', age: 32 },
  { id: 2, name: 'Bob', age: 28 },
  { id: 3, name: 'Charlie', age: 35 }
];


// ==============================
// 🔹 SORTING
// ==============================

// ✅ 1. Default sort (string sort)
console.log('Default sort:', [...nums].sort()); // [10, 100, 3, 5, 7] — wrong!

// ✅ 2. Numeric sort (ascending)
console.log('Numeric sort asc:', [...nums].sort((a, b) => a - b)); // [3, 5, 7, 10, 100]

// ✅ 3. Numeric sort (descending)
console.log('Numeric sort desc:', [...nums].sort((a, b) => b - a)); // [100, 10, 7, 5, 3]

// ✅ 4. Alphabetical string sort
console.log('String sort:', [...names].sort()); // ['Alice', 'Bob', 'Charlie', 'David']

// ✅ 5. Sort by object property (age ascending)
const byAgeAsc = [...users].sort((a, b) => a.age - b.age);
console.log('Sort by age ↑:', byAgeAsc);

// ✅ 6. Sort by name (alphabetical)
const byName = [...users].sort((a, b) => a.name.localeCompare(b.name)); // ascending
// b.localeCompare(a) // descending
console.log('Sort by name:', byName);


// ==============================
// 🔹 SEARCHING
// ==============================

// ✅ 7. indexOf (find index of value)
console.log('indexOf 7:', nums.indexOf(7)); // 2

// ✅ 8. lastIndexOf
console.log('lastIndexOf 7:', nums.lastIndexOf(7)); // 2

// ✅ 9. includes
console.log('includes 100:', nums.includes(100)); // true

// ✅ 10. find (returns first matching element)
const foundUser = users.find(user => user.age > 30);
console.log('find age > 30:', foundUser); // Alice

// ✅ 11. findIndex (index of first match)
console.log('findIndex age > 30:', users.findIndex(user => user.age > 30)); // 0

// ✅ 12. filter (all matching elements)
const above30 = users.filter(user => user.age > 30);
console.log('filter age > 30:', above30); // Alice, Charlie

// ✅ 13. some (at least one matches)
console.log('some age < 30:', users.some(u => u.age < 30)); // true

// ✅ 14. every (all match)
console.log('every age > 25:', users.every(u => u.age > 25)); // true

// ✅ 15. binary search (custom implementation)
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
const sortedNums = [...nums].sort((a, b) => a - b);
console.log('Binary search 10:', binarySearch(sortedNums, 10)); // index

// ✅ 16. Object key/value search
const obj = { a: 1, b: 2, c: 3 };
console.log('Object keys:', Object.keys(obj)); // ['a', 'b', 'c']
console.log('Object values:', Object.values(obj)); // [1, 2, 3]
console.log('Object entries:', Object.entries(obj)); // [['a', 1], ...]

// Find key with value === 2
const keyWith2 = Object.entries(obj).find(([k, v]) => v === 2)?.[0];
console.log('key with value 2:', keyWith2); // 'b'

