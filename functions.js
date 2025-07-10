// Function statement / declaration

function a() {
    console.log("a called")
}

// Function expression
const b = function() {
    console.log("b called")
}

// Anonymous function 
// function () {

// }

// Named function expression

const c = function namedFunction() {
    console.log("c called")
}

c() // works fine 
// namedFunction() // This will throw an error because namedFunction is not defined in the global scope

// First class functions / Citizens
function firstClassFunction(fn) {
    fn();
}
firstClassFunction(function() {}); // a called
// the ability of functions to be passed as arguments to other functions, returned from functions, and assigned to variables is called first class functions

// Arrow functions
const arrowFunction = () => {
    console.log("Arrow function called");
}
arrowFunction(); // Arrow function called

// Due to callback function we can use async in js which is a synchronus single threaded language
setTimeout(function() {
    console.log("This is a callback function executed after 1 second");
}, 1000)

// blocking main thread
// js has only one call stack which is used to execute the code
// if we have a long running task it will block the main thread and the browser will become unresponsive
// to avoid this we can use setTimeout, setInterval, requestAnimationFrame, etc.
// to schedule the task to be executed later

//requestAnimationFrame
function animate() {
    console.log("Animating...");
    requestAnimationFrame(animate); // Schedule the next frame
}
animate(); // Start the animation
// setInterval
setInterval(() => {
    console.log("This is executed every 2 seconds");
}, 2000);
// setTimeout
setTimeout(() => {
    console.log("This is executed after 3 seconds");
}, 3000);
// setTimeout with a delay of 0
setTimeout(() => {
    console.log("This is executed after 0 seconds");
}, 0);

// when to use requestAnimationFrame
// requestAnimationFrame is used for animations and visual updates
// it is more efficient than setTimeout and setInterval because it is synchronized with the browser's repaint cycle
// it allows the browser to optimize the rendering and improve performance
// it is used to create smooth animations and transitions
// it is also used to create games and interactive applications
// it is called before the next repaint of the browser

// event listeners with closure

function createEventListener() {
    let count = 0;
    return function() {
        document.getElementById("myButton").addEventListener("click", function handleClick() {
            count++;
            console.log(`Button clicked ${count} times`);
        });
    }
}
createEventListener()(); // Initialize the event listener
// event listeners are heavy and takes memory
// so we should remove them when they are not needed

// Promises and mutation observers(changes to dom) go to microtask queue others go to callback queue (setTimeout, dom operation etc)
// starvation of callback queue can happen if microtask queue is not empty i.e. if there are pending promises
// MutationObserver is used to watch for changes in the DOM
// and execute a callback function when changes occur
// it is useful for detecting changes in the DOM and updating the UI accordingly

// Higher order functions -> functions that take other functions as arguments or return functions as their result
function higherOrderFunction(fn) {
    return function(...args) {
        console.log("Higher order function called");
        return fn(...args);
    }
}
