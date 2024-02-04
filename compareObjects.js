
function isObject (object) {
    return object != null && typeof object === 'object';
}

function compareObjects (obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2)
const obj1Keys = Object.keys(obj1);
const obj2Keys = Object.keys(obj2);

if (obj1Keys.length !== obj2Keys.length) {
    return false;
}

for (let key of obj1Keys) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (!areObjects && val1 !== val2) {
        return false;
    }
    if (areObjects && !compareObjects(val1, val2)) {
        return false;
    }
}
return true;

}

console.log(compareObjects({a: 1, b: 2}, {a: 1, b: 2}) === true)