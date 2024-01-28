

const arr = [1,2,3]

Array.prototype.myMap = function (cb) {
    let self = this;
    let result = [];
    // console.log({self});
    // console.log({result});
    // console.log({cb});
    self.forEach((val, ind) => {
        result.push(cb(val, ind, self));
    })

    return result;
}

console.log(arr.map((x) => {
    return x*2;
}));

console.log(arr.myMap((x) => {
    return x*2;
}));