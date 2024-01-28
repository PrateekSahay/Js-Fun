// function twoSum(array, target) {
//     if (!array.length) {
//         return [];
//     }

//     const length = array.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (array[i] + array[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }




// function twoSum(array, target) {
//     if (!array.length) {
//         return [];
//     }

//     const length = array.length;
//     // array.sort((a, b) => {return a - b });
//     array.sort((a, b) => a - b );
//     console.log(array);
//     let i = 0;
//     let j = length - 1;
//     console.log(i, j);
//     while(i<j) {
//         console.log("array[i] + array[length - 1]", array[i] + array[length - 1]);
//         if (array[i] + array[j - 1] === target) {
//             return [i, j - 1];
//         }
//         else if (array[i] + array[j - 1] > target) {
//             j--;
//         }
//         else {
//             i++;
//         }
//     }
//     return [];
// }


const twoSum = (array, target) => {
    if (!array.length) {
        return [];
    }

    const map = new Map();
    const length = array.length;
    for (let i = 0; i < length; i++) {
        const compliment = target - array[i];
        if (map.has(compliment)) {
            return [map.get(compliment), i];
        }
        else {
            map.set(array[i], i);
        }
        // console.log("map[compliment]", map[compliment]);
        // if (map[compliment] >= 0) {
        //     return([map[compliment], i]);
        // }
        // else {
        //     map[array[i]] = i;
        // }
    }
}

const array = [7, 2, 9, 11];
const target = 9;

console.log(twoSum(array, target));