// TOOL -> TL

const removeDuplicates = (str) => {
    const map = new Map();
    for(const char of str) {
        if (!map.has(char)) {
            map.set(char, 1);
        }
        else {
            let val = map.get(char);
            map.set(char, ++val);
        }
    }
    console.log("map", map);

    let final = '';
    // map.forEach((value, key, map) => {
    //     if (value === 1) final+= key;
    // })

    // for (let x of map) {
    //     if (x[1] === 1) final+= x[0];
    // }

    return final;
}

console.log(removeDuplicates("abbs"));