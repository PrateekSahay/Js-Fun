function logWithTime(message) {
    const now = ((Date.now() - startTime) / 1000).toFixed(1) + "s";
    console.log(`[${now}] ${message}`);
  }
  
  const startTime = Date.now();
  
  async function test10Seconds() {
    logWithTime("🔁 Starting test10Seconds (both promises created upfront)");
  
    const p1 = new Promise((res) => setTimeout(() => res("P1 done"), 10000)); // 10s
    const p2 = new Promise((res) => setTimeout(() => res("P2 done"), 5000));  // 5s
  
    const result1 = await p1;
    logWithTime("✅ p1 resolved: " + result1);
  
    const result2 = await p2; // p2 is already done by now
    logWithTime("✅ p2 resolved: " + result2);
  }
  
  async function test15Seconds() {
    logWithTime("\n🔁 Starting test15Seconds (p2 created after p1 finishes)");
  
    const p1 = new Promise((res) => setTimeout(() => res("P1 done"), 10000)); // 10s
  
    const result1 = await p1;
    logWithTime("✅ p1 resolved: " + result1);
  
    const p2 = new Promise((res) => setTimeout(() => res("P2 done"), 5000)); // starts now
  
    const result2 = await p2;
    logWithTime("✅ p2 resolved: " + result2);
  }
  
  (async () => {
    await test10Seconds(); // ⏱️ Total: ~10s
    await test15Seconds(); // ⏱️ Total: ~15s
  })();
  

//  [0.0s] 🔁 Starting test10Seconds (both promises created upfront)
// [10.0s] ✅ p1 resolved: P1 done
// [10.0s] ✅ p2 resolved: P2 done
// [10.0s] 
// 🔁 Starting test15Seconds (p2 created after p1 finishes)
// [20.0s] ✅ p1 resolved: P1 done
// [25.0s] ✅ p2 resolved: P2 done

// === Code Execution Successful ===



/*
async/await vs Promises — Execution & Timing Summary

1. async/await vs Promise chaining
- async/await is syntax sugar over Promises
- No performance difference
- Same event loop behavior
*/

// async / await
async function getDataAsync() {
  const user = await fetchUser()
  return fetchPosts(user.id)
}

// Promise chaining
function getDataPromise() {
  return fetchUser()
    .then(user => fetchPosts(user.id))
}

/*
--------------------------------------------------
2. await does NOT block the program
- It only pauses the current async function
- Other code continues executing
*/

async function foo() {
  await fetchData()
  console.log("after await")
}

foo()
console.log("outside")
// Output:
// outside
// after await

/*
--------------------------------------------------
3. Code after await is always async
- Even if the Promise is already resolved
- Runs as a microtask
*/

async function test() {
  await Promise.resolve()
  console.log("A")
}

test()
console.log("B")
// Output:
// B
// A

/*
--------------------------------------------------
4. .then() and await have the same timing
- Both schedule callbacks in the microtask queue
*/

Promise.resolve().then(() => console.log("then"))

async function demo() {
  await Promise.resolve()
  console.log("await")
}

demo()
// Output:
// then
// await
// (order depends on which was queued first)

/*
--------------------------------------------------
5. Event loop priority
Execution order:
1. Synchronous code
2. Microtasks (await, .then, queueMicrotask)
3. Macrotasks (setTimeout, setInterval, I/O)
*/

console.log("1")

Promise.resolve().then(() => console.log("2"))

setTimeout(() => console.log("3"), 0)

console.log("4")
// Output:
// 1
// 4
// 2
// 3

/*
--------------------------------------------------
6. Timeline example (full picture)
*/

console.log("A")

async function timelineDemo() {
  console.log("B")
  await Promise.resolve()
  console.log("C")
}

timelineDemo()

Promise.resolve().then(() => console.log("D"))

setTimeout(() => console.log("E"), 0)

console.log("F")
// Output:
// A
// B
// F
// C
// D
// E

/*
--------------------------------------------------
7. Sequential vs parallel awaits
*/

// Sequential (slower if not needed)
async function sequential() {
  await fetchA()
  await fetchB()
}

// Parallel
async function parallel() {
  await Promise.all([fetchA(), fetchB()])
}

/*
--------------------------------------------------
8. Rule of thumb
- Use async/await for readability and complex logic
- Use Promise chaining for short, linear flows
- Everything after await runs later
*/
