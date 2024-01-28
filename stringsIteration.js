// const str = "GeeksforGeeks";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// };

const str = "Geeks";
for (const char of str) {
    console.log(char);
};

const str1 = "Geeks";
Array.from(str1).forEach(elem => {
    console.log(elem);
});

let str2 = "Geeks";
let result = str2.split('');
result.forEach(char => {
    console.log(char);
});