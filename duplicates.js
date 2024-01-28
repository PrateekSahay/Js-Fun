const isDuplicatePresent = (arr) => {
    if (!arr.length) {
        return false;
    }

    const map = new Map();
    for (let i of arr) {
        if (map.has(i)) {
            return true;
        }
        else {
            map.set(i, i);
        }
    }
    return false;
}

const isDuplicatePresent2 = (arr) => {
    if (!arr.length) {
        return false;
    }

    const set = new Set(arr);
    return set.size !== arr.length;
}

const arr = [1,2,3, 4, 4]

console.log(isDuplicatePresent(arr));
console.log(isDuplicatePresent2(arr));