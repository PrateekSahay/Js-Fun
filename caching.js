const expensiveFunc = function(x, y) {        
    for (let i = 0; i < 20000000; i++) {
    }
    return x*y;
}

const memoizedFunc = (fn) => {
    const result = {};
    return function (...args) {
        let self = this;
        const key = JSON.stringify(args);
        console.log({result})        
        console.log("result[key]", result[key]);
        if (!result[key]) {            
            result[key] = fn.apply(self, [...args])            
        }
        console.log({result})
        return result[key];
    }
}

// console.time("func1")
// console.log(expensiveFunc(5, 19))
// console.timeEnd("func1");

// console.time("func2")
// console.log(expensiveFunc(5, 19))
// console.timeEnd("func2");

const myFunc = memoizedFunc(expensiveFunc);

console.time("func3")
console.log(myFunc(5, 19))
console.timeEnd("func3");

console.time("func4")
console.log(myFunc(5, 19))
console.timeEnd("func4");

const factorial = memoizedFunc((x) => {
    if (x == 0) return 1;
    else return x * factorial(x-1);
});

console.time("func5")
console.log(factorial(5));
console.timeEnd("func5");

console.time("func6")
console.log(factorial(6));
console.timeEnd("func6");