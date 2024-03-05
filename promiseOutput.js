console.log("Start");

const promise = new Promise((resolve, reject) => {
    console.log("Inside Promise");
    resolve("Promise Resolved 1");
    resolve("Promise Resolved 2");

    setTimeout(() => {
        resolve("Promise Resolved 3");
    }, 0)
})

console.log("After");

promise.then((data) => {
    console.log("After1");
}).then(() => {
    console.log("After1 + then");
}).catch(() => {
    console.log("After1 + catch");
})

console.log("After promise1");

promise.then((data) => {
    console.log("After2");
}).then(() => {
    console.log("After2 + then");
})

console.log("After promise2");