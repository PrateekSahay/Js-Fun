let arr = [
    [1,2],
    [3,4],
    [5, 6, [7, 8]],
    [9, 10]
]

console.log(arr.flat(2));

const myFlatten = (arr, depth) => {
    let result = [];
    arr.forEach((val, key) => {
        // console.log("val", val);
        // console.log("key", key);
        if (Array.isArray(val) & depth > 0) {
            result.push(...myFlatten(val, depth - 1));
        }
        else {
            result.push(val);
        }
    });
    return result;
}

const myFlatten2 = (arr, depth) => {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            acc =  acc.push(... myFlatten2(curr));
        }
        else {
            acc.push(curr);            
        }
        return acc;
    }, [])
}

console.log("myFlatten1", myFlatten(arr,  1));
console.log("myFlatten2", myFlatten(arr,  2));