// ==============================
// 🔁 ALL LOOP TYPES IN JS
// ==============================

// ------------------------------
// ✅ for loop (Can Break ✅, Async ✅)
for (let i = 0; i < 3; i++) {
    if (i === 2) break; // stops early
    console.log('for loop:', i);
  }
  
  // ------------------------------
  // ✅ while loop (Can Break ✅, Async ✅)
  let j = 0;
  while (j < 3) {
    if (j === 2) break;
    console.log('while loop:', j);
    j++;
  }
  
  // ------------------------------
  // ✅ do...while loop (Can Break ✅, Async ✅)
  let k = 0;
  do {
    if (k === 2) break;
    console.log('do...while loop:', k);
    k++;
  } while (k < 3);
  
  // ------------------------------
  // ✅ for...of (Can Break ✅, Async ✅)
  const arr = ['a', 'b', 'c'];
  for (const item of arr) {
    if (item === 'b') break;
    console.log('for...of:', item);
  }
  
  // ------------------------------
  // ⚠️ for...in (Can Break ✅, Async ✅)
  const obj = { a: 1, b: 2, c: 3 };
  for (const key in obj) {
    if (key === 'b') break;
    console.log('for...in:', key, obj[key]);
  }
  
  // ------------------------------
  // ❌ forEach (Can Break ❌, Async ❌)
  console.log('forEach (can NOT break or await):');
  arr.forEach(async item => {
    // Can't break or await properly
    await new Promise(res => setTimeout(res, 100));
    console.log('forEach:', item);
  });
  
  // ------------------------------
  // ❌ map (Can Break ❌, Async ❌)
  const upper = arr.map(item => item.toUpperCase());
  console.log('map result:', upper);
  
  // ------------------------------
  // ❌ filter (Can Break ❌, Async ❌)
  const filtered = arr.filter(item => item !== 'b');
  console.log('filter result:', filtered);
  
  // ------------------------------
  // ❌ reduce (Can Break ❌, Async ❌)
  const combined = arr.reduce((acc, val) => acc + val, '');
  console.log('reduce result:', combined);
  
  // ------------------------------
  // ✅ for await...of (Can Break ✅, Async ✅)
  const asyncIterable = {
    async *[Symbol.asyncIterator]() {
      yield 'x';
      yield 'y';
      yield 'z';
    }
  };
  
  (async () => {
    for await (const val of asyncIterable) {
      if (val === 'y') break;
      console.log('for await...of:', val);
    }
  })();
  
  // =======================================================
  // ✅ LOOP CAPABILITY SUMMARY (BREAK vs ASYNC)
  // =======================================================
  
  /*
  
  | Loop Type         | Can Break | Async-Await Support |
  |------------------|-----------|---------------------|
  | for              | ✅         | ✅                  |
  | while            | ✅         | ✅                  |
  | do...while       | ✅         | ✅                  |
  | for...of         | ✅         | ✅                  |
  | for...in         | ✅         | ✅                  |
  | forEach()        | ❌         | ❌                  |
  | map()            | ❌         | ❌                  |
  | filter()         | ❌         | ❌                  |
  | reduce()         | ❌         | ❌                  |
  | for await...of   | ✅         | ✅                  |
  
  */
  
  