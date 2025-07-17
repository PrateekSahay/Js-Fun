// ==============================
// 📜 COMMON STRING METHODS IN JS
// ==============================

const str = "Hello, JavaScript World!";

// 🔹 1. length
console.log('length:', str.length); // 24

// 🔹 2. charAt(index)
console.log('charAt(0):', str.charAt(0)); // 'H'

// 🔹 3. charCodeAt(index)
console.log('charCodeAt(0):', str.charCodeAt(0)); // ASCII 72

// 🔹 4. at(index) (supports negative indexing in modern JS)
console.log('at(-1):', str.at(-1)); // '!'

// 🔹 5. slice(start, end)
console.log('slice(7, 17):', str.slice(7, 17)); // 'JavaScript'

// 🔹 6. substring(start, end) – similar to slice but doesn't support negative indexes
console.log('substring(7, 17):', str.substring(7, 17)); // 'JavaScript'

// 🔹 7. substr(start, length) – deprecated, but still works
console.log('substr(7, 10):', str.substr(7, 10)); // 'JavaScript'

// 🔹 8. toUpperCase()
console.log('toUpperCase:', str.toUpperCase()); // 'HELLO, JAVASCRIPT WORLD!'

// 🔹 9. toLowerCase()
console.log('toLowerCase:', str.toLowerCase()); // 'hello, javascript world!'

// 🔹 10. includes(substring)
console.log('includes("JavaScript"):', str.includes("JavaScript")); // true

// 🔹 11. startsWith(substring)
console.log('startsWith("Hello"):', str.startsWith("Hello")); // true

// 🔹 12. endsWith(substring)
console.log('endsWith("World!"):', str.endsWith("World!")); // true

// 🔹 13. indexOf(substring)
console.log('indexOf("JavaScript"):', str.indexOf("JavaScript")); // 7

// 🔹 14. lastIndexOf(substring)
console.log('lastIndexOf("o"):', str.lastIndexOf("o")); // 20

// 🔹 15. replace(old, new)
console.log('replace("JavaScript", "JS"):', str.replace("JavaScript", "JS")); // 'Hello, JS World!'

// 🔹 16. replaceAll(old, new)
console.log('replaceAll("l", "*"):', str.replaceAll("l", "*")); // 'He**o, JavaScript Wor*d!'

// 🔹 17. split(separator)
console.log('split(","):', str.split(",")); // ['Hello', ' JavaScript World!']

// 🔹 18. trim() – removes whitespace from both ends
const messy = "   padded string   ";
console.log('trim():', messy.trim()); // 'padded string'

// 🔹 19. trimStart() / trimEnd()
console.log('trimStart():', messy.trimStart());
console.log('trimEnd():', messy.trimEnd());

// 🔹 20. concat()
console.log('concat():', "Hello".concat(", ", "World")); // 'Hello, World'

// 🔹 21. repeat(n)
console.log('repeat(3):', "Hi ".repeat(3)); // 'Hi Hi Hi '

// 🔹 22. padStart(totalLength, padChar)
console.log('padStart(10, "*"):', "42".padStart(10, "*")); // '********42'

// 🔹 23. padEnd(totalLength, padChar)
console.log('padEnd(10, "*"):', "42".padEnd(10, "*")); // '42********'

// 🔹 24. match(regexp)
console.log('match(/Java\w+/):', str.match(/Java\w+/)); // ['JavaScript']

// 🔹 25. search(regexp)
console.log('search(/World/):', str.search(/World/)); // 18

// 🔹 26. includes() with case-sensitivity
console.log('includes("javascript"):', str.includes("javascript")); // false

// 🔹 27. localeCompare()
console.log('"apple".localeCompare("banana"):', "apple".localeCompare("banana")); // -1

// 🔹 28. normalize()
const accented = 'e\u0301'; // e + ́ (combining mark)
console.log('normalize():', accented.normalize()); // 'é'

// 🔹 29. toString()
const num = 123;
console.log('toString():', num.toString()); // "123"

// 🔹 30. valueOf()
const s = new String("hello");
console.log('valueOf():', s.valueOf()); // 'hello'

