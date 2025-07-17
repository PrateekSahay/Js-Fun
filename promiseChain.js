// Write promise and promise chain code that demonstrates the behavior of promises in JavaScript, including how they handle resolution and chaining.
console.log("Start");

const promise = new Promise((resolve, reject) => {
    console.log("Inside Promise");
    resolve("Promise Resolved 1");
    // The second resolve will be ignored since the promise is already resolved
    resolve("Promise Resolved 2");

    setTimeout(() => {
        resolve("Promise Resolved 3"); // This will not execute as the promise is already resolved
    }, 0);
}
); 

console.log("After");
promise.then((data) => {
    console.log("After1:", data);
}).then(() => {
    console.log("After1 + then");
}).catch(() => {
    console.log("After1 + catch");
});

console.log("After promise1");

promise.then((data) => {
    console.log("After2:", data);
}).then(() => {
    console.log("After2 + then");
});
console.log("After promise2");

console.log("End of script");



// Output:
// Start
// Inside Promise
// After
// After1: Promise Resolved 1
// After1 + then
// After promise1
// After2: Promise Resolved 1
// After2 + then
// After promise2
// End of script

// why we got "inside promise" before "after" in console ?
// The reason "Inside Promise" appears before "After" in the console is due to the synchronous nature of the code execution in JavaScript.
// When the `new Promise` constructor is called, it executes the function passed to it immediately.
// This function contains the `console.log("Inside Promise")` statement, which is executed right away.
// After that, the JavaScript engine continues executing the rest of the code in the synchronous order.
// The `console.log("After")` statement is executed after the promise constructor function completes, which is why "After" appears after "Inside Promise" in the console.