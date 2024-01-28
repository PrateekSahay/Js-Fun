const obj = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1,2]
    }
};

// O/p: {
//     A: "12",
//     B: 23,
//     C.P: 23,
//     C.O.L: 56,
//     C.Q.0: 1
//     C.Q.1: 2
// }

const flattenObject = (obj, parent= '') => {
    let finalObject = {};
    for (let key in obj) {
        const parentKey = parent ? parent + '.' + key : key;
        if (typeof obj[key] === "object") {            
            let objRet = flattenObject(obj[key], parentKey);
            finalObject = {...finalObject, ...objRet};
        }
        else {
            finalObject[parentKey] = obj[key];            
        }
    }

    return finalObject;
}

const flattenObject1 = (obj, parent= '') => {
    let finalObject = {};
    const flattenFunc = (obj, parent) => {
        for (let key in obj) {
            // console.log("obj[key]", obj[key]);
            const parentKey = parent ? parent + '.' + key : key;
            if (typeof obj[key] === "object") {            
                flattenFunc(obj[key], parentKey);                
            }
            else {
                finalObject[parentKey] = obj[key];            
            }
        }
    }
    flattenFunc(obj, parent);
    return finalObject;
}

console.log(flattenObject(obj, ''));
console.log(flattenObject1(obj, ''));