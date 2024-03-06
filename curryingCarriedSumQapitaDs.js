// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");

// const curriedSum = (a) => (b) => b ? curriedSum(a+b) : a;

const returnFlattenedArray = (arr) => {
    return arr.flat(Infinity);
}

const curriedSum = (...a) => (...b) => {
    let res;
    // console.log("a", a);
    // console.log("b", b);
    if (Array.isArray(a)) {
        const arr1 = returnFlattenedArray(a);
        console.log("arr1", arr1);
        // res = arr1[0];
        if (typeof arr1[0] === "number") {
            res= 0;
        }
        else {
            res= '';
        }
        arr1.forEach((val) => {
            res+= val
        })
        console.log("res first", res);
    }
    
    if (b.length) {
        let res2;
        if (Array.isArray(b)) {
        const arr2 = returnFlattenedArray(b)
        // console.log("arr2", arr2);
         if (typeof arr2[0] === "number") {
            res2= 0;
        }
        else {
            res2= '';
        }
        arr2.forEach((val) => {
            res2+= val
        })
        }
    return curriedSum(res + res2);
    }
    else{ 
        // console.log("resFinal", a);
        return a;
        
    }
    
}


// console.log(curriedSum(1)(2)(3)())
console.log(curriedSum(1, 'hello')(2, ['world', 3])(7)());
// console.log(curriedSum([1, 2, 3])([4, [5, 6]])(7)())